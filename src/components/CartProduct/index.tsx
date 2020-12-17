import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import useCart from '../../hooks/cart';
import { Cart } from '../../redux/ducks/cart/types';

import * as S from './styles';

interface CartProductProps {
  cart: Cart;
}

const CartProduct: React.FC<CartProductProps> = ({ cart }) => {
  const { decrement, increment } = useCart();

  return (
    <S.Container>
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
    </S.Container>
  );
};

export default CartProduct;
