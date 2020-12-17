import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import { loadRequest } from '../../redux/ducks/products/actions';

import ProductCard from '../../components/ProductCard';
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

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <S.ProductContainer>
          <S.List
            data={products}
            keyExtractor={(item: any) => item.id.toString()}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              height: 80,
            }}
            renderItem={({ item }: any) => <ProductCard product={item} />}
          />
        </S.ProductContainer>
      </S.Container>
    </ThemeProvider>
  );
};

export default Products;
