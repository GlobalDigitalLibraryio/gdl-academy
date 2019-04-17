import React from 'react';
import { AppBar, Toolbar, Typography, Hidden } from '@material-ui/core';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import gdlLogo from '../assets/GDL-logo.svg';
import colors from '../styles/colors';

const styles = {
  logo: css`
    img {
      margin-top: 2px;
      height: 36px;
      width: 100px;
      margin-left: 15px;
    }
  `,
  center: css`
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    text-align: center;
  `
};

const Header = ({ siteTitle }: { siteTitle: String }) => (
  <AppBar
    position="static"
    css={{ color: '#fff', backgroundColor: colors.primary }}
  >
    <Toolbar>
      <Link to="/" css={styles.logo} aria-label="Global Digital Library">
        <img src={gdlLogo} aria-hidden alt="logo" />
      </Link>
      <Hidden mdDown>
        <Typography variant="h6" color="inherit" css={styles.center}>
          {siteTitle}
        </Typography>
      </Hidden>
    </Toolbar>
  </AppBar>
);

export default Header;
