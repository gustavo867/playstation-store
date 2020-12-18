import React from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import FeatherIcon from 'react-native-vector-icons/Feather';
import useCart from '../../hooks/cart';
import { Cart } from '../../redux/ducks/cart/types';

import * as S from './styles';

interface CartProductProps {
  cart: Cart;
  setTrashActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartProduct: React.FC<CartProductProps> = ({ cart, setTrashActive }) => {
  const { decrement, increment } = useCart();

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const isGestureActive = useSharedValue(false);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
      isGestureActive.value = true;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = ctx.x + translationX;
      if (ctx.y + translationY >= 0) {
        translateY.value = ctx.y + translationY;
      }
    },
    onEnd: () => {
      translateX.value = withSpring(0, {
        velocity: 3,
        damping: 30,
      });
      translateY.value = withSpring(0, {
        velocity: 3,
        damping: 30,
      });
      isGestureActive.value = false;
    },
  });

  const style = useAnimatedStyle(() => {
    const elevation = withSpring(isGestureActive.value ? 20 : 4);

    return {
      elevation,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
      flexDirection: 'row',
    };
  });

  return (
    <S.Container style={style}>
      <PanGestureHandler onGestureEvent={onGestureEvent} enabled={true}>
        <S.Content>
          <S.ProductImage
            source={{
              uri: cart.url,
            }}
            resizeMode="contain"
          />
          <S.ProductsInfoContainer>
            <S.Title>{cart.product_name}</S.Title>
            <S.ProductPrice>${cart.price}</S.ProductPrice>
            <S.ProductSinglePrice>
              {cart.quantity}x ${cart.price}
            </S.ProductSinglePrice>
          </S.ProductsInfoContainer>
          <S.Column>
            <S.ActionButton onPress={() => increment(cart.id)}>
              <FeatherIcon name="plus" color="#E83F5B" size={16} />
            </S.ActionButton>
            <S.ActionButton onPress={() => decrement(cart.id)}>
              <FeatherIcon name="minus" color="#E83F5B" size={16} />
            </S.ActionButton>
          </S.Column>
        </S.Content>
      </PanGestureHandler>
    </S.Container>
  );
};

export default CartProduct;
