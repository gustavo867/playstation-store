import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import useCart from '../../hooks/cart';
import { ApplicationState } from '../../redux';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import * as S from './styles';

const FloatingCart: React.FC = () => {
  const { cleanCart } = useCart();
  const { cart } = useSelector((state: ApplicationState) => state.cart);
  const { navigate } = useNavigation();

  const rotation = useSharedValue(0);
  const trashRotation = useSharedValue(0);

  const cartTotal = useMemo(() => {
    if (cart.length >= 1) {
      const total = cart.reduce((previous, product) => {
        if (product.quantity) {
          const productsSubtotal = product.price * product.quantity;

          return previous + productsSubtotal;
        } else {
          return previous;
        }
      }, 0);

      return `${total}`;
    }
    return 0;
  }, [cart]);

  const totalItemsInCart = useMemo(() => {
    rotation.value = withSequence(
      withTiming(-20, { duration: 300 }),
      withRepeat(withTiming(20, { duration: 100 }), 2, true),
      withTiming(0, { duration: 300 }),
    );

    if (cart.length >= 1) {
      const total = cart.reduce((previous, product) => {
        if (product.quantity) {
          const productsQuantity = product.quantity;

          return previous + productsQuantity;
        } else {
          return 0;
        }
      }, 0);

      return total;
    }
    return 0;
  }, [cart]);

  const cartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  const trashStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${trashRotation.value}deg` }],
    };
  });

  const clenCartAnimation = useCallback(() => {
    cleanCart();
    trashRotation.value = withSequence(
      withTiming(-60, { duration: 500 }),
      withTiming(-20, { duration: 300 }),
      withRepeat(withTiming(20, { duration: 100 }), 2, true),
      withTiming(0, { duration: 300 }),
    );
  }, []);

  return (
    <S.Container>
      <S.CartButton onPress={() => navigate('Cart')}>
        <S.AnimatedButton style={cartStyle}>
          <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        </S.AnimatedButton>
        <S.CartText>{`${totalItemsInCart} Items`}</S.CartText>
      </S.CartButton>
      <S.Row>
        <S.CartPricing>
          <S.CartTotalPrice>${cartTotal}</S.CartTotalPrice>
        </S.CartPricing>

        <S.AnimatedButton style={trashStyle}>
          <S.ActionButton onPress={clenCartAnimation}>
            <FeatherIcon
              name={cart.length > 0 ? 'trash-2' : 'trash'}
              color="#FFF"
              size={24}
            />
          </S.ActionButton>
        </S.AnimatedButton>
      </S.Row>
    </S.Container>
  );
};

export default FloatingCart;
