import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Header = ({ logoImg, isSticky }) => {  
  return(
    <header
    className={isSticky ? "site-header px-md-3 py-md-3 position-sticky scrolled bordered" : "site-header px-md-3 py-md-3 position-sticky scrolled"}
    >
      <div className="container-fluid">        
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-3 col-xs-3 d-none d-sm-block text-center text-lg-left px-0">
            <nav className="navbar site-navbar offcanvas-active navbar-expand-lg px-0 py-0">
              <div className="collapse navbar-collapse" id="mobile-menu">
                <div className="navbar-nav-wrapper">
                  <ul className="navbar-nav main-menu">
                    <li className="nav-item me-1"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item me-1"><a className="nav-link" href="#">FAQ</a></li>
                    <li className="nav-item me-1"><a className="nav-link" href="#">Claims</a></li>
                    <li className="nav-item me-1"><a className="nav-link" href="#">Giveback</a></li>
                    <li className="nav-item me-1"><a className="nav-link" href="#">Policy 2.0</a></li>
                    <li className="nav-item me-1 d-lg-none d-md-block"><a className="nav-link text-dark" href="#">My Account</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
            <div
            className={isSticky ? "sticky logo d-flex justify-content-center" : "normal logo d-flex justify-content-center"}
            >
                <Link to="/">
                    <GatsbyImage
                      alt="Online Accountants from £28 a month | Mazuma Accountants"
                      image={getImage(logoImg)} 
                      width={143} height={27}
                    />
                </Link>
            </div>
          </div>
          <div className="my-account-link col-lg-4 col-md-3 col-sm-3 p-0 m-0 align-items-start float-right d-flex justify-content-end">
            <a className="nav-link text-dark w-auto" href="#">My Account</a>
          </div>
        </div>
      </div>
    </header>
)
}


export default Header
