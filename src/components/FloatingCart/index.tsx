import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';

import * as S from './styles';

const FloatingCart: React.FC = () => {
  const { cart } = useSelector((state: ApplicationState) => state.cart);
  const { navigate } = useNavigation();

  // const cartTotal = useMemo(() => {
  //   const total = cart.reduce((previous, product) => {
  //     const productsSubtotal = product.price * product.quantity;
  //     console.log(previous + productsSubtotal);

  //     return previous + productsSubtotal;
  //   }, 0);

  //   console.log(total);

  //   return `$ ${total}`;
  // }, [cart]);

  // const totalItemsInCart = useMemo(() => {
  //   const total = cart.reduce((previous, product) => {
  //     if (product.quantity) {
  //       const productsQuantity = product.quantity;

  //       if (previous) {
  //         console.log(previous);
  //         return previous + productsQuantity;
  //       } else {
  //         return productsQuantity;
  //       }
  //     }
  //     return 0;
  //   }, 0);

  //   return total;
  // }, [cart]);

  return (
    <S.Container>
      <S.CartButton onPress={() => navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        <S.CartText>{` items`}</S.CartText>
      </S.CartButton>

      <S.CartPricing>
        <S.CartTotalPrice>0</S.CartTotalPrice>
      </S.CartPricing>
    </S.Container>
  );
};

export default FloatingCart;
