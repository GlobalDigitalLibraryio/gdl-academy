import React from 'react';
import { graphql } from "gatsby";
import rehypeReact from 'rehype-react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  withStyles,
} from "@material-ui/core"
import { css } from '@emotion/core';

import { Cover, Main, Grid as EGrid, GridItem, GridHeader } from '../elements';
import SafeButton from '../components/SafeButton';
import SEO from '../components/SEO';
import { mq } from '../styles';
import { misc } from '../styles';
import { Data } from '../types';
import gitHubLogo from '../images/github.svg';
import libraryBooks from '../images/librarybooks.svg';
import billy from '../../content/images/billy.png'
import panico from '../../content/images/panico.png'
import rose from '../../content/images/rose.png'

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
  `
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: (props: any) => <Typography {...props} css={styles.h1} variant="h4" />,
    h2: (props: any) => <Typography {...props} css={styles.h2} variant="h5" />,
    h3: (props: any) => <Typography {...props} css={styles.h3} variant="h5" />,
    p: (props: any) => <Typography {...props} css={styles.body1} />,
    cover: Cover
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
    allMarkdownRemark(
      filter: { frontmatter: { showOnFrontPage: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;

const StyledCard= withStyles({
  root: {
    transition:  'box-shadow .2s ease-out',
    '&:hover': {
      backgroundColor: 'rgba(0, 41, 79, 0.1)',
      boxShadow: '1px 8px 20px grey',
      transition:  'box-shadow .2s ease-in',
    }
  }
})(Card);

export default ({ data }: { data: Data }) => {
  return(
    <SEO title={data.markdownRemark.frontmatter.title}>
      <Main>{renderAst(data.markdownRemark.htmlAst)}</Main>
      <div
        style={{maxWidth: misc.containers.large,
        width: '100vw', margin:'auto'}}
      >
        <Grid id="gridFrontPage">
          {data.allMarkdownRemark.edges.map(({ node: post }, key) => (
            <Grid item key={post.fields.slug}>
              <a href={post.fields.slug}>
                <StyledCard
                  className={
                    key % 4 === 0 || key % 4 === 3
                    ? key % 2 === 0
                    ? "card"
                    : "colorSmallScreen card"
                    : key % 2 === 0
                    ? "colorBigScreen card"
                    : "colorBigScreen colorSmallScreen card"
                  }
                >
                  <CardContent style={{ display: 'flex', flexDirection: 'row'}}>
                    <img
                      src={key % 3 == 0 ? rose : key % 3 == 1 ?billy :panico}
                      style={{width:'150px', paddingRight:20, margin:'auto'}}
                    />
                    <div>
                      <Typography variant="h5" style={{ padding: "10px 0px", fontSize: "1.7rem"}}>
                        {post.frontmatter.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        paragraph
                        style={{
                          fontSize: "16px",
                          fontFamily: "Lato, Roboto, sans-serif",
                        }}
                      >
                        {post.frontmatter.description}
                      </Typography>
                      <Typography variant="subtitle1" style={{ color: "#0277bd" }}>
                        Read more...
                      </Typography>
                    </div>
                  </CardContent>
                </StyledCard>
              </a>
            </Grid>
          ))}
        </Grid> 
        {/** Item-grid */}
        <Card style={{marginTop:"30px"}}>
          <EGrid>
            <GridItem divider="yes">
              <GridHeader>
                <img alt ="github logo" src={gitHubLogo}/>
                <Typography css={styles.h3} variant="h5">Item</Typography>
              </GridHeader>
              <Typography css={styles.body1} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <SafeButton  to="/">Button</SafeButton >
            </GridItem>
            <GridItem divider="yes">
              <GridHeader>
                <img alt ="github logo" src={libraryBooks}/>
                <Typography css={styles.h3} variant="h5">Item</Typography>
              </GridHeader>
              <Typography css={styles.body1} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <SafeButton  to="/">Button</SafeButton >
            </GridItem>
          </EGrid>
        </Card>
      </div>
    </SEO>
  );
};
