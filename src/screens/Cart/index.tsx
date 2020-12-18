import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';

import * as S from './styles';
import CartProduct from '../../components/CartProduct';
import FloatingCart from '../../components/FloatingCart';

const Cart: React.FC = () => {
  const theme = useSelector((state: ApplicationState) => state.theme.theme);
  const cart = useSelector((state: ApplicationState) => state.cart.cart);

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
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
