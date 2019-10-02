import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import getPageContext from './src/getPageContext';

const muiPageContext = getPageContext();

export const wrapRootElement = ({ element }) => {
  return (
    <MuiThemeProvider theme={muiPageContext.theme}>
      <CssBaseline />
      {element}
    </MuiThemeProvider>
  );
};

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Material UI
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{
        __html: muiPageContext.sheetsRegistry.toString()
      }}
    />
  ]);
};
