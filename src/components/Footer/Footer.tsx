/**
 * Part of GDL gdl-frontend.
 * Copyright (C) 2019 GDL
 *
 * See LICENSE
 */

import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link, StaticQuery, graphql } from 'gatsby';

import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';
import Container from '../../elements/Container';
import CCLogo from './cc-logo.svg';
import { colors } from '../../styles';
import { media } from '../../styles';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            zendeskUrl
          }
        }
      }
    `}
    render={(data: { site: { siteMetadata: { zendeskUrl: string } } }) => (
      <Container
        size="large"
        // https://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
        css={css`
          flex-shrink: 0;
          width: 100%;
        `}
      >
        <FooterStyle>
          <div
            css={[
              {
                order: 2,
                width: '100%',
                borderBottom: `1px solid ${colors.base.grayLight}`,
                margin: '10px 10px 18px'
              },
              media.tablet({ display: 'none' })
            ]}
          />
          <LinkList>
            <div>
              <a href="https://home.digitallibrary.io/the-global-digital-library-uses-cookies/">
                Cookie policy
              </a>
            </div>
            <div>
              <a href="https://home.digitallibrary.io/privacy/">
                Privacy policy
              </a>
            </div>
            <div>
              <a href="https://home.digitallibrary.io/cc/">
                Licensing and reuse
              </a>
            </div>
            <div>
              <a href={data.site.siteMetadata.zendeskUrl}>Report issues</a>
            </div>
            <div>
              <a href="https://home.digitallibrary.io/about/">About</a>
            </div>
            <div>
              <a href="https://blog.digitallibrary.io/">Blog</a>
            </div>
            <div>
              <Link to="/attributions" aria-label="link">
                Detailed attributions
              </Link>
            </div>
          </LinkList>

          <CreativeCommons>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://creativecommons.org/"
              aria-label="Creative Commons"
            >
              <img src={CCLogo} css={{ width: '100px', margin: '30px 0px' }} />
            </a>
          </CreativeCommons>

          <SocialMediaIcons>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
              href="https://www.facebook.com/globaldigitallibrary/"
            >
              <FacebookIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              aria-label="Twitter"
              href="https://twitter.com/gdigitallibrary"
            >
              <TwitterIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              aria-label="YouTube"
              href="https://www.youtube.com/channel/UCN5RyDXS_aKA37YwIPzQPTg"
            >
              <YoutubeIcon />
            </a>
          </SocialMediaIcons>
        </FooterStyle>
      </Container>
    )}
  />
);

const FooterStyle = styled('footer')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    color: ${colors.text.default};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LinkList = styled('ul')`
  display: flex;
  justify-content: space-between;
  flex-grow: 3;
  flex-wrap: wrap;
  order: 2;
  font-size: 0.8rem;
  padding: 0;
  margin-left: 28px;
  list-style: none;
  div {
    padding: 8px;
    width: 50%;
    ${media.tablet`
      width: 33%;
  `}
  }
`;

const SocialMediaIcons = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin: 14px 36px 20px 36px;
  svg {
    font-size: 2.25rem;
  }
  a {
    color: ${colors.text.subtle};
    &:hover {
      color: ${colors.primary};
    }
  }
  order: 1;
  ${media.tablet`
    order: 4;
  `};
`;

const CreativeCommons = styled('div')`
  order: 3;
  flex-grow: 1;
  text-align: center;
  a:hover {
    fill: ${colors.primary};
  }
`;

export default Footer;
