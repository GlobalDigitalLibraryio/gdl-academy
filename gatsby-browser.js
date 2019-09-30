import React from 'react';
import getPageContext from './src/getPageContext';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import '!raw-loader!normalize.css';
import './src/styles/styles.css';
import 'prismjs/themes/prism-okaidia.css';

const muiPageContext = getPageContext();

export function onClientEntry() {
  const styleNode = window.document.createComment('jss-insertion-point');
  window.document.head.insertBefore(styleNode, window.document.head.firstChild);
}

export function wrapPageElement({ element }) {
  return (
    <MuiThemeProvider theme={muiPageContext.theme}>
      <CssBaseline />
      {element}
    </MuiThemeProvider>
  );
}
