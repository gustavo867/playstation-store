import React from 'react';
import { Product } from '../../redux/ducks/products/types';

import FeatherIcon from 'react-native-vector-icons/Feather';
import * as S from './styles';

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <S.ProductContainer>
      <S.ProductImage
        source={{
          uri: product.url,
        }}
        resizeMode="contain"
      />
      <S.ProductCategory>{product.category}</S.ProductCategory>
      <S.ProductName>{product.product_name}</S.ProductName>
      <S.RowBetween>
        <S.ProductPrice>${product.price}</S.ProductPrice>
        <S.ProductButton>
          <FeatherIcon size={23} name="plus" color="#C4C4C4" />
        </S.ProductButton>
      </S.RowBetween>
    </S.ProductContainer>
  );
};

export default ProductCard;
