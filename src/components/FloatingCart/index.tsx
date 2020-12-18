import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import useCart from '../../hooks/cart';
import { ApplicationState } from '../../redux';

import * as S from './styles';

const FloatingCart: React.FC = () => {
  const { cleanCart } = useCart();
  const { cart } = useSelector((state: ApplicationState) => state.cart);
  const { navigate } = useNavigation();

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

      return `$ ${total}`;
    }
    return 0;
  }, [cart]);

  const totalItemsInCart = useMemo(() => {
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

  return (
    <S.Container>
      <S.CartButton onPress={() => navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        <S.CartText>{`${totalItemsInCart} Items`}</S.CartText>
      </S.CartButton>
      <S.Row>
        <S.CartPricing>
          <S.CartTotalPrice>{cartTotal}</S.CartTotalPrice>
        </S.CartPricing>
        <S.ActionButton onPress={cleanCart}>
          <FeatherIcon name="x-circle" color="#FFF" size={24} />
        </S.ActionButton>
      </S.Row>
    </S.Container>
  );
};

export default FloatingCart;
