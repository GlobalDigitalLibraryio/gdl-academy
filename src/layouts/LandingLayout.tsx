import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import { Typography } from '@material-ui/core';
import { css } from '@emotion/core';

import { Cover, Section, Main, Grid, GridItem, GridHeader } from '../elements';
import SafeButton from '../components/SafeButton';
import SEO from '../components/SEO';
import { mq } from '../styles';

import { Data } from '../types';

const styles = {
  h1: css`
    color: white;
    margin-bottom: 15px;
  `,
  h2: mq({
    gridArea: 'header',
    fontSize: '1.7rem',
    marginLeft: ['auto', 'inherit'],
    marginRight: ['auto', 'inherit'],
    marginTop: ['inherit', 'auto']
  }),
  h3: mq({ marginLeft: [10, 0] }),
  body1: css`
    line-height: 1.7;
    font-size: 1rem;
  `,
  button: mq({
    gridArea: 'button',
    marginLeft: ['auto', 'inherit'],
    marginRight: ['auto', 'inherit']
  }),
  imageWrapper: mq({
    gridArea: 'image',
    width: 180,
    marginLeft: ['auto', 'inherit'],
    marginRight: ['auto', 'inherit']
  })
};

const Paragraph = (props: any) => {
  if (props.children.length === 1 && typeof props.children[0] === 'object') {
    const firstChild = props.children[0];
    if (!!firstChild.props.src) {
      return <p {...props} style={{ gridArea: 'image' }} />;
    } else if (!!firstChild.props.to) {
      return <p {...props} css={styles.button} />;
    } else if (firstChild.props.className === 'gatsby-resp-image-wrapper') {
      return <p {...props} css={styles.imageWrapper} />;
    } else {
      return <p {...props} />;
    }
  } else {
    return <Typography {...props} css={styles.body1} />;
  }
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: (props: any) => <Typography {...props} css={styles.h1} variant="h4" />,
    h2: (props: any) => <Typography {...props} css={styles.h2} variant="h5" />,
    h3: (props: any) => <Typography {...props} css={styles.h3} variant="h5" />,
    button: (props: any) => <SafeButton {...props} css={styles.button} />,

    p: Paragraph,
    cover: Cover,
    section: Section,
    grid: Grid,
    griditem: GridItem,
    gridheader: GridHeader
  }
}).Compiler;

export const query = graphql`
  query LandingQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;

export default ({ data }: { data: Data }) => (
  <SEO title={data.markdownRemark.frontmatter.title}>
    <Main>{renderAst(data.markdownRemark.htmlAst)}</Main>
  </SEO>
);
