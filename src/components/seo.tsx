/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

const DEFAULT_TITLE = 'Gdl academy';

type Props = {
  title: string;
  description: string;
  lang: string;
  meta: any;
  keywords: string[];
  children: ReactNode;
};

function SEO({ children, description, lang, meta, keywords, title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription
          },
          {
            property: `og:title`,
            content: title
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          }
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `)
                }
              : []
          )
          .concat(meta)}
      />
      <Header siteTitle={title || DEFAULT_TITLE} />
      {children}
      <Footer />
    </>
  );
}

SEO.defaultProps = {
  title: DEFAULT_TITLE,
  lang: `en`,
  meta: [],
  keywords: ['Academy, gdl'],
  description: ``
};

export default SEO;
