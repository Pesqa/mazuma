import React, { createRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"
import lottie from 'lottie-web';

import animLeft from '../assets/animations/left-anim.json';
import animRight from '../assets/animations/right-anim.json';
const Hero2 = () => {
    let animLeftContainer = createRef();
    let animRightContainer = createRef();
    let animL = null;
    let animR = null;
    useEffect(() => {
      animL = lottie.loadAnimation({
        container: animLeftContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animLeft
      });
      animR = lottie.loadAnimation({
        container: animRightContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animRight
      });
      return () => {
        animL.destroy();
        animR.destroy();
      }
      
    }, []);
  
    return(
    <>
      <div className="container-fluid m-md-0 px-0 overflow-hidden">
        <div className="row d-flex justify-content-between position-relative">
          <div className="col-md-4 pe-5 d-sm-none d-md-block"><span ref={animLeftContainer}></span></div>
          <div className="hero-mid-content col-md-7 col-sm-12 d-flex justify-content-center pt-xl-20 pt-15 pb-md-25 pt-lg-20 pt-sm-10 px-sm-5 pt-xs-10">
          <div>
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
          <div className="col-md-4 col-sm-12 ps-0 pt-0 pb-0"><span ref={animRightContainer}></span></div>
        </div>
      </div>      
    </>
  )}
  
  export default Hero2
  