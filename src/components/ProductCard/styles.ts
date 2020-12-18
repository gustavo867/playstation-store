import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProps } from '../../themes/theme.types';

const { width, height } = Dimensions.get('window');

export const ProductContainer = styled.View`
  background-color: #fff;
  width: ${width * 0.42}px;
  height: ${height * 0.4}px;
  margin-horizontal: 10px;
  margin-bottom: 20px;
  border-radius: 12px;
`;

export const ProductImage = styled.Image`
  margin-top: 20px;
  width: ${width * 0.42}px;
  height: ${height * 0.24}px;
  align-self: center;
`;

export const ProductCategory = styled.Text`
  margin-top: 10px;
  color: ${(props: ThemeProps) => props.theme.primary};
  font-size: 10px;
  font-weight: 500;
  margin-left: 10px;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #4187ff;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 21px;
  margin-left: 10px;
  width: ${width * 0.35}px;
`;

export const RowBetween = styled.View`
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 15px;
  flex-direction: row;
  margin-top: 8px;
`;

export const Center = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const ProductButton = styled.TouchableOpacity``;

export const ProductPrice = styled.Text``;

export const InCartButton = styled.View`
  background-color: #e83f5b;
  align-self: center;
  width: ${width * 0.38}px;
  height: ${height * 0.05}px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const InCartText = styled.Text`
  color: #fff;
  font-size: 10px;
  width: ${width * 0.3}px;
`;
