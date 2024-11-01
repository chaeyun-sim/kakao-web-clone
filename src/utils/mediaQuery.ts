/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, type CSSObject, type Interpolation } from 'styled-components';

export type Breakpoints = 'xsmall' | 'small' | 'medium' | 'large';

export const breakpoints: Record<Breakpoints, string> = {
  xsmall: '@media (max-width: 767px)',
  small: '@media (max-width: 1023px)',
  medium: '@media (max-width: 1439px)',
  large: '@media (max-width: 1902px)',
};

const mediaQuery = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<Breakpoints, any>;

export default mediaQuery;
