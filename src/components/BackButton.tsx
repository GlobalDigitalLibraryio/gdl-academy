import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const BackButton = () => (
  <ButtonBase
    focusRipple
    style={{ marginTop: 20 }}
    onClick={() => window.history.back()}
  >
    <ArrowBack color="primary" style={{ fontSize: 30 }} />
    <Typography color="primary" style={{ marginLeft: 5, fontWeight: 'bold' }}>
      BACK
    </Typography>
  </ButtonBase>
);

export default BackButton;
