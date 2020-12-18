import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import { Animated, Easing } from 'react-native';
import { Container, Img } from './styles';

import logo from '../../assets/images/logo-black.png';
import logoLight from '../../assets/images/logo.png';

interface Props {
  margin: number;
}

const Logo: React.FC<Props> = ({ margin }) => {
  const theme = useSelector((state: ApplicationState) => state.theme.theme);
  const widthValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthValue, {
      toValue: 150,
      duration: 1000,
      easing: Easing.quad,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Container
      style={{
        width: widthValue,
        marginRight: margin,
        opacity: widthValue.interpolate({
          inputRange: [0, 50, 150],
          outputRange: [0, 0.7, 1],
          extrapolate: 'clamp',
        }),
      }}>
      <Img
        source={theme.mode === 'light' ? logoLight : logo}
        resizeMode="contain"
      />
    </Container>
  );
};

export default Logo;
