/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, schema }) {
  const { site, SiteLogo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteURL
          }
        }
        SiteLogo: file(relativePath: {eq: "logo.png"}) {
         publicURL
       }
      }
    `
  )
  const siteURL = site.siteMetadata.siteURL 
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteLogo = siteURL+SiteLogo.publicURL;
  const curl = siteURL
  return (
    <Helmet      
        htmlAttributes={{
          lang
        }}
        title={defaultTitle}
      >
       <meta name="description" content={metaDescription} />
       <meta name="image" content={siteLogo} />

       <meta name="og:locale" content={lang} />
       <meta name="og:title" content={defaultTitle} />
       <meta name="og:url" content={curl} />
       <meta name="og:description" content={metaDescription} />
       <meta name="og:type" content="website" />
       <meta name="og:image" content={siteLogo} />

       <meta name="twitter:card" content="summary" />
       <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
       <meta name="twitter:description" content={metaDescription} />
       <meta name="twitter:url" content={curl} />
       <meta name="twitter:image" content={siteLogo} />
       {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
       {cpath && <link rel="canonical" href={`${siteURL}${cpath}`} />}
       <style>{`.async-hide { opacity: 0 !important} `}</style>
        <script>{`(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
        h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
        (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
        })(window,document.documentElement,'async-hide','dataLayer',2500,
        {'OPT-TLFDBWX':true});`}</script>

        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-529BF3X');`}</script>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-K4G3FJR"></script>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-529BF3X"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
     </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
