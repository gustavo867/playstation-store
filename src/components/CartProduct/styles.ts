import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled(Animated.View)`
  width: ${width * 0.8}px;
  background-color: #fff;
  height: ${height * 0.2}px;
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Content = styled(Animated.View)`
  padding: 10px;
  flex-direction: row;
  width: ${width * 0.8}px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

export const ProductImage = styled.Image`
  width: ${width * 0.2}px;
  height: ${height * 0.15}px;
`;

export const ProductsInfoContainer = styled.View`
  width: ${width * 0.4}px;
  flex-direction: column;
  height: ${height * 0.25}px;
  padding-left: 10px;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  width: ${width * 0.3}px;
`;

export const ProductPrice = styled.Text`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  letter-spacing: 0.2px;
  margin-top: 5px;
`;

export const ProductSinglePrice = styled.Text`
  color: #e83f5b;
  font-size: 20px;
  margin-top: 10px;
`;

export const ActionButton = styled.TouchableOpacity`
  width: ${width * 0.1}px;
  height: ${width * 0.1}px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: rgba(232, 63, 91, 0.1);
  align-self: flex-end;
  margin-bottom: 20px;
  margin-right: 20px;
`;
