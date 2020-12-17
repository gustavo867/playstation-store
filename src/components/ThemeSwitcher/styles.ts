import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProps } from '../../themes/theme.types';

export const Container = styled.View`
  position: absolute;
  height: 54px;
  width: 54px;
  top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50}px;
  right: 7px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background: ${(props: ThemeProps) => props.theme.switch_mode};
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px black;
  elevation: 5;
  z-index: 100;
`;
