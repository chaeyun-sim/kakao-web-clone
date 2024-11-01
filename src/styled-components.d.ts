import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: {
        blue: string;
        green: string;
        pink: string;
      };
      gray: {
        0: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
      };
      background: {
        100: string;
        200: string;
      };
    };
    keyframes: {
      slide: {
        '0%': { transform: string };
        '100%': { transform: string };
      };
    };
  }
}
