import 'styled-components';
import { theme } from '~/lib/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors
    responsive: typeof theme.responsive
    transition: typeof theme.transition
    shadow: typeof theme.shadow
    rounded: typeof theme.rounded
    spacing: typeof theme.spacing
  }
}