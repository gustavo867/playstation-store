import styled from 'styled-components/native';
import { ThemeProps } from '../../themes/theme.types';

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
  margin-bottom: 100px;
`;
