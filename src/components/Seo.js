import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title }) {
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

  const metaDescription = site.siteMetadata.description;
  const siteTitle = title || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes="en"
      title="Protab"
      titleTemplate={`%s |${title ? ` ${title}` : ''} ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: siteTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: siteTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]}
    />
  );
}

export default SEO;
