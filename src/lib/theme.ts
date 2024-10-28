import { rem } from "polished";
import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    yellow: '#ffc223',
    blue: '#3e3eff',
    pink: '#ff3eba',
    success: '#17b362',
    warning: '#ff7500',
    danger: '#e80537',
    grey: '#dbdbdb',
    foreground: '#333333',
    background: '#ffffff'
  },
  responsive: {
    sm: '(min-width: 425px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1440px)',
  },
  transition: 'all ease 0.3s',
  shadow: {
    sm: '0 2px 5px rgba(0, 0, 0, 0.1)',
    md: '0 5px 10px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
  },
  rounded: {
    sm: rem(8),
    md: rem(12),
    lg: rem(24),
    full: '9999px'
  },
  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(24),
    xl: rem(32)
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
    margin: 0px;
    color: ${theme.colors.foreground};
  }
  * {
    box-sizing: border-box;
  }
`;
