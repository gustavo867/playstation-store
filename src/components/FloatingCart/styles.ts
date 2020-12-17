import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  position: absolute;
  background-color: #4187ff;
  bottom: 0;
  width: ${width}px;
  height: ${height * 0.12}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CartButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const CartText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const CartPricing = styled.View`
  padding: 20px;
`;

export const CartTotalPrice = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
