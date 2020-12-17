import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import { loadRequest } from '../../redux/ducks/products/actions';

import ProductCard from '../../components/ProductCard';
import FloatingCart from '../../components/FloatingCart';
import * as S from './styles';

const Products: React.FC = () => {
  const { products, error } = useSelector(
    (state: ApplicationState) => state.products,
  );
  const theme = useSelector((state: ApplicationState) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  const Footer = () => (
    <S.ErrorContainer>
      <S.Error>{error ? 'Error on request' : ''}</S.Error>
    </S.ErrorContainer>
  );

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <S.ProductContainer>
          <S.List
            data={products}
            keyExtractor={(item: any) => item.id.toString()}
            ListFooterComponent={<Footer />}
            ListFooterComponentStyle={{
              height: 80,
            }}
            renderItem={({ item }: any) => <ProductCard product={item} />}
          />
        </S.ProductContainer>
        <FloatingCart />
      </S.Container>
    </ThemeProvider>
  );
};

export default Products;
