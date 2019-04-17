/* eslint-disable no-underscore-dangle...*/

import { SheetsRegistry } from 'react-jss';
import {
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';
import colors from './styles/colors';

const isBrowser = typeof window !== 'undefined';
// Create a theme with Gatsby brand colors. You can choose your own
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Lato", "Roboto", sans-serif',
    useNextVariants: true
  },
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 18,
        padding: '13px 30px',
        minWidth: 125
      },
      outlinedPrimary: {
        fontWeight: 'bold',
        border: `1.7px solid ${colors.primary}`,
        '&:hover': {
          border: `1.7px solid ${colors.primary}`
        }
      }
    }
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!isBrowser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
