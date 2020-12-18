import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
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

export const AnimatedButton = styled(Animated.View)``;

export const CartButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const CartText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const CartPricing = styled.View``;

export const CartTotalPrice = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 12px;
  background-color: #e83f5b;
  align-items: center;
  justify-content: center;
  margin-right: -10px;
  margin-left: 10px;
`;
