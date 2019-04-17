import React from 'react';
import Typography from '@material-ui/core/Typography';

import SEO from '../components/SEO';

const NotFoundPage = () => (
  <SEO>
    <Typography variant="h3" gutterBottom>
      NOT FOUND
    </Typography>
    <Typography>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Typography>
  </SEO>
);

export default NotFoundPage;
