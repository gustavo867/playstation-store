import { Animated, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  overflow: hidden;
  height: 50px;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight - 15 : 20}px;
  align-self: center;
`;

export const Img = styled.Image`
  width: 150px;
  height: 50px;
`;
