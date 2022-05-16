import { lightTheme } from '../global-style/themes';

declare module "styled-components" {
  type CustomTheme = typeof lightTheme;
  
  export interface DefaultTheme extends CustomTheme {}
}