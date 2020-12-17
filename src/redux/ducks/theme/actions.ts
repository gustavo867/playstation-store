import { action } from 'typesafe-actions';
import { ThemesType } from './types';
import { Theme } from '../../../themes/theme.types';

export const switchTheme = (theme: Theme) =>
  action(ThemesType.SWITCH_THEME, theme);
