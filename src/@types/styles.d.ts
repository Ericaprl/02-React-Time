import 'styled-components';
import { defaultTheme } from '../styles/themes/default';


type ThemeType = typeof defaultTheme;

// usado para sobre escrever algo de uma biblioteca existente
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}

}