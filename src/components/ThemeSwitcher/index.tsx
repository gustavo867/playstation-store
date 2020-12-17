import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import { switchTheme } from '../../redux/ducks/theme/actions';
import { darkTheme, lightTheme } from '../../themes';

import { Container, Button } from './styles';

const ThemeSwitcher: React.FC = () => {
  const theme = useSelector((state: ApplicationState) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = useCallback(() => {
    switch (theme.mode) {
      case 'dark':
        return dispatch(switchTheme(lightTheme as any));
      case 'light':
        return dispatch(switchTheme(darkTheme as any));
      default:
        return;
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button onPress={toggleTheme}>
          <Icon
            name={theme.mode === 'light' ? 'sun' : 'moon'}
            size={30}
            color="#e83f5b"
          />
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
