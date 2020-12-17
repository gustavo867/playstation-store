import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProps } from '../../themes/theme.types';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  align-items: center;
  background-color: ${(props: ThemeProps) => props.theme.primary};
  padding-top: 90px;
`;

export const ProductList = styled.FlatList`
  padding-horizontal: 5px;
  margin-top: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  color: ${(props: ThemeProps) => props.theme.text_color};
  font-size: 20px;
  margin-right: 20px;
`;

export const HeaderAction = styled.TouchableOpacity``;
