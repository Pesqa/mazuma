import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Hero = () => {
    return(
        <div class="main-banner pt-xl-20 pt-15 pb-md-25 pt-lg-20 pt-sm-10 pt-xs-10">
        <div className="container">
             <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                    <div className="text-center mb-11 mb-lg-24 mb-xs-5">
                    <h1 className="font-size-11 mb-7 letter-spacing-normal">Forget Everything You Know About Insurance</h1>
                    <p className="font-size-6 px-lg-5 mb-0 text-dark">Instant everything. Great prices. Big heart.</p>
                    <div className="btn-group d-inline-block mt--md-10">
                        <button type="button" className="btn btn-primary rounded-sm shadow-4 mt-4 mb-2 text-uppercase">Check Our Prices</button>
                        <p className="d-block mt-6 font-size-4 mb-0 text-bali-gray letter-spacing-normal">Already insured? We'll help you switch</p>
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