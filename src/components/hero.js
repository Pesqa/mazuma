import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Hero = () => {
    return(
        <div class="main-banner pt-xl-20 pt-15 pb-md-25 pt-lg-20 pt-sm-10 pt-xs-10">
        <div className="container">
             <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                    <div className="text-center mb-11 mb-lg-24 mb-xs-5">
                    <h1 className="display-4 lh-1 mb-1 text-secondary-dark letter-spacing-normal">We Take Your Accounting Matters Seriously</h1>
                    <p className="fs-4 text mb-4 text-secondary-dark">So that you don't have to</p>
                    <p className="fs-5 text fw-bold mb-0 text-secondary-dark">Instant Accounting, Great Prices, Big heart</p>
                    <div className="btn-group d-inline-block mt-md-10">
                        <button type="button" className="btn btn-primary fw-bold shadow rounded-sm shadow-4 mt-4 mb-3 text-uppercase">Check Our Pricing</button>
                        <p className="d-block mt-6 font-size-4 mb-0 text-dark letter-spacing-normal">Already got accountant? We'll help you switch</p>
                    </div>
                    </div>
                </div>
             </div>
            <div className="row p-0 text-center d-sm-block d-lg-none d-md-none mt-4">
                <StaticImage src="../assets/images/mob-banner.jpg" className="w-100"/>
            </div>
        </div>
        </div>
    )
}
  
export default Hero