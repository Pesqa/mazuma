import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const HomeHeader = ({ logoImg, isSticky }) => {  
  return(
    <header
    className={isSticky ? "site-header px-md-3 py-md-1 px-sm-3 py-sm-1 position-sticky scrolled bordered" : "site-header px-md-1 py-md-3 px-sm-1 py-sm-3 position-sticky"}
    >
      <div className="container-fluid">        
        <div className="row">
          {/* <div className="col-lg-4 col-md-3 col-sm-3 col-xs-3 d-sm-block text-center text-lg-left px-0">
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
          </div> */}
          <div className="col-sm-12 col-xs-12 text-center">
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
                <Link to="/get-a-quote/1" className="text-decoration-none fw-normal header-top-btn position-absolute position-absolute top-0 end-0 me-2 mt-2 p-2 px-lg-4 px-md-2 px-sm-2 top-price-btn btn-primary fw-bold shadow rounded-sm shadow-4 text-uppercase text-decoration-none"><i className="fw-normal fw-bold">Check Our </i>Pricing</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
)
}


export default HomeHeader
