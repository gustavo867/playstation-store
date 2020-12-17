import React from 'react';
import { ThemeProvider } from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';

import * as S from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CartProduct from '../../components/CartProduct';
import FloatingCart from '../../components/FloatingCart';
import useCart from '../../hooks/cart';

const Cart: React.FC = () => {
  const { cleanCart } = useCart();
  const theme = useSelector((state: ApplicationState) => state.theme.theme);
  const cart = useSelector((state: ApplicationState) => state.cart.cart);

  const Header = () => (
    <S.Header>
      <S.HeaderTitle>Remove all items</S.HeaderTitle>
      <S.HeaderAction onPress={cleanCart}>
        <FeatherIcon name="x-circle" color="red" size={24} />
      </S.HeaderAction>
    </S.Header>
  );

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Header />
        <S.ProductList
          data={cart}
          keyExtractor={(item: any) => String(item.id.toExponential())}
          renderItem={({ item }: any) => <CartProduct cart={item} />}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          style={{
            paddingHorizontal: 5,
          }}
        />
        <FloatingCart />
      </S.Container>
    </ThemeProvider>
  );
};

export default Cart;
