import { Reducer } from 'redux';
import { lightTheme } from '../../../themes';
import { ThemeState, ThemesType } from './types';

const INITIAL_STATE: any = {
  theme: lightTheme,
};

const themeReducer: Reducer<ThemeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemesType.SWITCH_THEME:
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
