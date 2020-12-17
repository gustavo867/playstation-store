import React from 'react';

import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';

import * as S from './styles';

const Products: React.FC = () => {
  const { products } = useSelector((state: ApplicationState) => state.products);

  return (
    <S.Container>
      <Text>{JSON.stringify(products)}</Text>
    </S.Container>
  );
};

export default Products;
