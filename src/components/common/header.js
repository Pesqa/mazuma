import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Header = ({ logoImg, isSticky }) => {  
  return(
    <header
    className= "site-header px-md-3 py-md-1 px-sm-2 py-sm-2 position-sticky scrolled bordered"
    >
      <div className="container-fluid">        
        <div className="row">          
        <div className="col-sm-12 col-xs-12 text-center">
            <div
            className="sticky logo d-flex justify-content-start ps-md-5"
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
          {/* <div className="my-account-link col-lg-6 col-md-6 col-sm-6 p-0 m-0 align-items-start float-right d-flex justify-content-end">
            <a className="nav-link text-dark w-auto" href="#">My Account</a>
          </div> */}
        </div>
      </div>
    </header>
)
}


export default Header
