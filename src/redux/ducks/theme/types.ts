import { Theme } from '../../../themes/theme.types';

export enum ThemesType {
  SWITCH_THEME = '@theme/SWITCH_THEME',
}

export interface ThemeState {
  readonly theme: Theme;
}
