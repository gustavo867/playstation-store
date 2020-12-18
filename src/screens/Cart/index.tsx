import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';

import * as S from './styles';
import CartProduct from '../../components/CartProduct';
import FloatingCart from '../../components/FloatingCart';
import { Cart as CartType } from '../../redux/ducks/cart/types';

const Cart: React.FC = () => {
  const [trashActive, setTrashActive] = useState(false);
  const theme = useSelector((state: ApplicationState) => state.theme.theme);
  const cart = useSelector((state: ApplicationState) => state.cart.cart);

  function compare(a: CartType, b: CartType) {
    if (a.quantity < b.quantity) return -1;
    if (a.quantity > b.quantity) return 1;
    return 0;
  }

  return (
    <ThemeProvider theme={theme}>
      <S.SafeContainer>
        <S.Container>
          <S.ProductList
            data={cart.sort(compare)}
            keyExtractor={(item: any) => String(item.id.toExponential())}
            renderItem={({ item }: any) => (
              <CartProduct cart={item} setTrashActive={setTrashActive} />
            )}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: cart.length <= 3 ? 1 : 0,
            }}
            style={{
              paddingHorizontal: 5,
            }}
            showsVerticalScrollIndicator={false}
            inverted={true}
          />
          {!trashActive ? <FloatingCart /> : null}
        </S.Container>
      </S.SafeContainer>
    </ThemeProvider>
  );
};

export default Cart;
