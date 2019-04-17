import React from 'react';
import { JssProvider } from 'react-jss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import getPageContext from './src/getPageContext';

const muiPageContext = getPageContext();

const sheetsRegistryMap = muiPageContext.sheetsManager;

export const wrapRootElement = ({ element }) => {
  return (
    <JssProvider
      registry={muiPageContext.sheetsRegistry}
      generateClassName={muiPageContext.generateClassName}
    >
      <MuiThemeProvider
        theme={muiPageContext.theme}
        sheetsManager={sheetsRegistryMap}
      >
        <CssBaseline />
        {element}
      </MuiThemeProvider>
    </JssProvider>
  );
};

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="font-lato-stylesheet"
      href="https://fonts.googleapis.com/css?family=Lato:400,700"
      rel="stylesheet"
    />,
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
