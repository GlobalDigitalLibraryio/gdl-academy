import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from './src/getPageContext';
import { MuiThemeProvider, jssPreset } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { create } from 'jss';
import '!raw-loader!normalize.css';
import './src/styles/styles.css';
import 'prismjs/themes/prism-okaidia.css';

const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: 'jss-insertion-point'
});

const muiPageContext = getPageContext();

// onClientEntry() must be included for the requires above to be triggered,
// even if it is empty!
export function onClientEntry() {
  // Load Material Icons
  const pathIcons = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  const linkIcons = document.createElement('link');
  linkIcons.setAttribute('rel', 'stylesheet');
  linkIcons.setAttribute('href', pathIcons);
  document.head.appendChild(linkIcons);

  const styleNode = window.document.createComment('jss-insertion-point');
  window.document.head.insertBefore(styleNode, window.document.head.firstChild);
}

export function wrapPageElement({ element }) {
  return (
    <JssProvider jss={jss} generateClassName={muiPageContext.generateClassName}>
      <MuiThemeProvider theme={muiPageContext.theme}>
        <CssBaseline />
        {element}
      </MuiThemeProvider>
    </JssProvider>
  );
}
