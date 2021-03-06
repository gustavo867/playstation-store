import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import { loadRequest } from '../../redux/ducks/products/actions';

import ProductCard from '../../components/ProductCard';
import FloatingCart from '../../components/FloatingCart';
import * as S from './styles';

const Products: React.FC = () => {
  const { products } = useSelector((state: ApplicationState) => state.products);
  const theme = useSelector((state: ApplicationState) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <S.ProductContainer>
          <S.List
            data={products}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }: any) => <ProductCard product={item} />}
          />
          <FloatingCart />
        </S.ProductContainer>
      </S.Container>
    </ThemeProvider>
  );
};

export default Products;
