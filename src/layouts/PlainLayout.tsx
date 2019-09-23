import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import rehypeReact from 'rehype-react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import SEO from '../components/SEO';
import SafeButton from '../components/SafeButton';
import { mq } from '../styles';
import { Main } from '../elements';
import { Data } from '../types';
import BackButton from '../components/BackButton';

const styles = {
  h1: css`
    font-weight: 600;
    font-size: 2.6rem;
    margin-bottom: 20px;
  `,
  h2: css`
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 1.7rem;
    font-weight: 600;
  `,
  body1: css`
    line-height: 1.7;
    font-size: 1rem;
  `,
  section: mq({
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'hidden',
    padding: ['70px 30px', '80px 120px']
  }),
  content: mq({
    padding: ['70px 30px', '50px 120px']
  }),
  button: {
    marginTop: 20,
    gridArea: 'button'
  }
};

const ImageWrapper = styled.div`
  position: absolute;
  bottom: -80px;
  ${mq({ right: [0, '70px'] })};
  width: 300px;
  span {
    opacity: 0.3;
  }
`;

const Div = (props: any) => {
  if (props.children.length === 1 && typeof props.children[0] === 'object') {
    if (props.className === 'gatsby-highlight') {
      return <div {...props} style={{ width: 'auto' }} />;
    }
  }
  return <div {...props} style={{ width: '100vw' }} />;
};

const Video = ({ children }: { children: Array<string> }) => (
  <div
    // 56.25% is the magic that make iframe responsive
    // https://blog.theodo.com/2018/01/responsive-iframes-css-trick/
    style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}
  >
    <iframe
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0
      }}
      src={children[0].replace('watch?v=', 'embed/')}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: (p: any) => <Typography {...p} variant="h3" css={styles.h1} />,
    h2: (p: any) => <Typography {...p} variant="h5" css={styles.h2} />,
    h3: (p: any) => <Typography {...p} variant="h5" />,
    p: (p: any) => <Typography {...p} css={styles.body1} paragraph />,
    code: (p: any) => (
      <code {...p} style={{ whiteSpace: 'pre-wrap', width: '100vw' }} />
    ),
    button: (p: any) => <SafeButton {...p} css={styles.button} />,
    section: (p: any) => <section {...p} css={styles.section} />,
    content: (p: any) => <div {...p} css={styles.content} />,
    backbutton: BackButton,
    bottomimagewrapper: ImageWrapper,
    div: Div,
    video: Video
  }
}).Compiler;

export const query = graphql`
  query PostQuery($slug: String!) {
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
