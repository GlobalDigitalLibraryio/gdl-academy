const GDL_ENVIRONMENT = process.env.GDL_ENVIRONMENT || 'dev';
console.log(`Using environment config: '${GDL_ENVIRONMENT}'`);

const PRIMARY_COLOR = '#0277BD';

module.exports = {
  siteMetadata: {
    title: `GDL Academy`,
    description: `A site for GDL academy materials`,
    author: `Knowit`,
    zendeskUrl: 'https://digitallibrary.zendesk.com/hc/en-us/requests/new'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        options: {
          stylesProvider: {
            injectFirst: true
          }
        },
        theme: {
          primaryColor: PRIMARY_COLOR
        }
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `700`]
          }
        ]
      }
    },
    // Handle our static markdown files
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1060,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent'
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: []
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GDL academy`,
        short_name: `gdl-academy`,
        start_url: `/`,
        background_color: PRIMARY_COLOR,
        theme_color: PRIMARY_COLOR,
        display: `minimal-ui`,
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript'
  ]
};
