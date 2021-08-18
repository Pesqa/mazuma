import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useSwipeable } from "react-swipeable";
import { MenuStyles } from "../../layout/MenuStyles"
import SideBar from "../common/SideMenu"



import Header from "./header"
import Footer from "./footer"
const Layout = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true)
  });
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
    <div id="outer">
      <MenuStyles />
        <SwipeLayer {...handlers} />
        <SideBar
          isOpen={isOpen}
          onStateChange={s => setOpen(s.isOpen)}
          pageWrapId={"inner-wrap"}
          outerContainerId={"outer"}
        />
    <Header logoImg={HeaderLogo} isSticky={isSticky}/>
    <div className="container-fluid p-0" ref={ref} id="inner-wrap">
    {children}
    </div>
    <Footer logoImg={FooterLogo} appstoreImg={appstoreImg} playstoreImg={playstoreImg} />    
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
const SwipeLayer = styled.div`  
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    float: left;
    position: fixed;
    width: 10px;
    height: 100%;
    z-index: 900;
    top: 80px;
  }
`
export default Layout
