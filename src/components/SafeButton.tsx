import React from 'react';
import { Link } from 'gatsby';
import { Button } from '@material-ui/core';

/**
 * Security measurement for tabnabbing
 * https://davidebove.com/blog/2016/05/05/target_blank-the-vulnerability-in-your-browser/
 */
const SafeButton = (props: any) =>
  props.to ? (
    <Button
      {...props}
      variant="outlined"
      color="primary"
      component={Link}
      style={{ marginRight: 10 }}
    />
  ) : (
    <Button
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      variant="outlined"
      color="primary"
      style={{ marginRight: 10 }}
    />
  );

export default SafeButton;
