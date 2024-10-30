import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

export const Provider = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
