import facepaint from 'facepaint';
import getPageContext from '../getPageContext';

const theme = getPageContext().theme;

export default facepaint([
  `@media(min-width: ${theme.breakpoints.values.md}px)`
]);
