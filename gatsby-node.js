/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``));

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: replacePath(slug)
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const plainLayout = path.resolve('src/layouts/PlainLayout.tsx');

  const landingLayout = path.resolve('src/layouts/LandingLayout.tsx');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: node.fields.slug === '/' ? landingLayout : plainLayout,
        context: {
          slug: node.fields.slug
        } // additional data can be passed via context
      });
    });
  });
};
