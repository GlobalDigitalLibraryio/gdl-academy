import React from 'react';
import { graphql } from "gatsby";
import rehypeReact from 'rehype-react';
import styled from '@emotion/styled';
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core"
import { css } from '@emotion/core';

import { Cover, Section, Main, /*Grid,*/ GridItem, GridHeader } from '../elements';
import SafeButton from '../components/SafeButton';
import SEO from '../components/SEO';
import { mq } from '../styles';

import Container from '../elements/Container';
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
const ImageWrapper = styled.div`
  position: absolute;
  bottom: -30px;
  ${mq({ right: [0, '70px'] })};
  opacity: 0.3;
`;

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
    gridheader: GridHeader,
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
      sort: { order: DESC, fields: frontmatter___description }
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
            image
          }
        }
      }
    }
  }
`;

export default ({ data }: { data: Data }) => {
  console.log("kjører");
  return(
    <SEO title={data.markdownRemark.frontmatter.title}>
       <Main>{renderAst(data.markdownRemark.htmlAst)}</Main>
       <Container
        size="large"
        // https://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
        css={css`
          flex-shrink: 0;
          width: 100%;
        `}
      >
       <Grid container id="gridFrontPage">
          {data.allMarkdownRemark.edges.map(({ node: post }, key) => (
            <Grid item key={post.frontmatter.title}style={{overflow:"hidden"}}>
              <CardActionArea
                component="a"
                href={post.fields.slug}
                style={{
                  boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                }}
              >
              <Card
                className={
                  key % 4 === 0 || key % 4 === 3
                  ? key % 2 === 0
                  ? "card"
                  : "colorSmallScreen card"
                  : key % 2 === 0
                  ? "colorBigScreen card"
                  : "colorBigScreen colorSmallScreen card"
                }
                style={{ height: "100%"}}
              >
               <CardContent>
                 <ImageWrapper>
                  <img
                    src={post.frontmatter.image == "1"
                        ? "https://academy.digitallibrary.io/static/682213eb5f2cb2a038d96ae6f7088939/6b691/rose.png"
                        : (post.frontmatter.image == "2")
                        ?"https://academy.digitallibrary.io/static/97b24076ced574a87ca091c689b2e3e0/89595/billy.png"
                        :"https://developer.digitallibrary.io/static/7b81bf52add579bcf3ada893b08f5887/723e4/panico.png"
                        }
                    css={styles.imageWrapper}/>
                  </ImageWrapper>
                 <Typography
                   variant="h5"
                    style={{
                      padding: "10px 0px",
                      fontSize: "1.7rem",
                    }}
                 >
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
                    {console.log("FRontmatter: ", post.frontmatter)}
                  </Typography>
                   <Typography
                     variant="subtitle1"
                     style={{ color: "#0277bd" }}
                    >
                       Read more...
                    </Typography>
                </CardContent>
              </Card>
           </CardActionArea>
        </Grid>
       ))}
     </Grid>
     </Container>
   </SEO>);
};
