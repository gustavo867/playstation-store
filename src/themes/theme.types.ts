export interface Theme {
  mode: string;
  primary: string;
  text_color: string;
  status_bar_color: 'light-content' | 'dark-content';
  switch_mode: string;
  product_color: string;
}

export interface ThemeProps {
  theme: Theme;
}
