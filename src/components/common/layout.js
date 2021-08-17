import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
const Layout = ({ children }) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const { site, HeaderLogo, FooterLogo, appstoreImg, playstoreImg } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      HeaderLogo: file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 143)
        }
      }
      FooterLogo: file(relativePath: {eq: "logo-footer.png"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 118)
        }
      }
      appstoreImg: file(relativePath: {eq: "app-store.png"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 150)
        }
      }
      playstoreImg: file(relativePath: {eq: "play-store.png"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 150)
        }
      }
    }
  `)
  const handleScroll = () => {
    if (ref.current) {
      if(ref.current.getBoundingClientRect().top>=0)
      {
        setSticky(false) 
      }
      else
      {
        if(ref.current.getBoundingClientRect().top <= 100)
        {
          setSticky(ref.current.getBoundingClientRect().top <= 100);
        }
        else
        {
          setSticky(false)  
        }        
      }      
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  return (  
    <>
    <Header logoImg={HeaderLogo} isSticky={isSticky}/>
    <div className="container-fluid p-0" ref={ref}>
    {children}
    </div>
    <Footer logoImg={FooterLogo} appstoreImg={appstoreImg} playstoreImg={playstoreImg} />    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
