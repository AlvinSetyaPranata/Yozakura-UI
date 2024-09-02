import '../src/styles/tailwind.css'
import { withThemeByDataAttribute } from '@storybook/addon-themes';

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];
