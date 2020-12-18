import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProps } from '../../themes/theme.types';

const { width, height } = Dimensions.get('window');

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  align-items: center;
  background-color: ${(props: ThemeProps) => props.theme.primary};
  padding-top: ${height * 0.12}px;
`;

export const ProductList = styled(Animated.FlatList)`
  padding-horizontal: 5px;
  margin-top: 20px;
  flex-grow: 1;
  width: ${width}px;
`;
