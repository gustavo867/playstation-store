import styled from 'styled-components/native';
import { ThemeProps } from '../../themes/theme.types';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${(props: ThemeProps) => props.theme.primary};
`;

export const ProductContainer = styled.View`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  bounces: false,
})`
  padding-horizontal: 5px;
`;

export const ErrorContainer = styled.View`
  height: 80px;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.Text`
  color: red;
  font-size: 16px;
`;
