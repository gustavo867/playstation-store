import React, { useMemo } from 'react';
import { Product } from '../../redux/ducks/products/types';
import { ApplicationState } from '../../redux';
import { useSelector } from 'react-redux';

import FeatherIcon from 'react-native-vector-icons/Feather';
import useCart from '../../hooks/cart';
import * as S from './styles';

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { addToCart, isAlreadyInTheCart } = useCart();
  const cart = useSelector((state: ApplicationState) => state.cart.cart);

  const isInTheCart = useMemo(() => {
    const value = isAlreadyInTheCart(product.id);

    return value;
  }, [cart, isAlreadyInTheCart]);

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

      {isInTheCart === true ? (
        <S.Center>
          <S.InCartButton>
            <S.InCartText>Product is already in the cart</S.InCartText>
          </S.InCartButton>
        </S.Center>
      ) : (
        <S.RowBetween>
          <S.ProductPrice>${product.price}</S.ProductPrice>
          <S.ProductButton onPress={() => addToCart(product as any)}>
            <FeatherIcon size={23} name="plus" color="#C4C4C4" />
          </S.ProductButton>
        </S.RowBetween>
      )}
    </S.ProductContainer>
  );
};

export default ProductCard;
