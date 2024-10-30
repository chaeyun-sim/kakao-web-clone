import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    primary: '#fae100',
    secondary: {
      blue: '#CFE9FF',
      green: '#D4FFD4',
      pink: '#FFE9E9',
    },
    gray: {
      0: '#fff',
      100: '#f3f3f3',
      200: '#eee',
      300: '#888',
      400: '#666',
      500: '#333',
      600: '#111',
      700: '#000',
    },
    background: {
      100: 'rgba(255,255,255,.9)',
      200: 'rgba(255,255,255,.8)',
    },
  },
  keyframes: {
    slide: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(calc(-340px * 4))' },
    },
  },
};

export default theme;
