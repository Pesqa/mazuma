import React, { createRef, useEffect } from "react";
import { Link } from 'gatsby'
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
      <div className="container-fluid m-md-0 px-0 pt-lg-5 overflow-hidden">
        <div className="animation-block row d-flex justify-content-md-between justify-content-sm-center position-relative">
            <div className="animation-left col-lg-3 col-md-4 pe-5 d-sm-none d-md-block">
                <span ref={animLeftContainer}></span>
            </div>
                <div className="col-lg-6 col-md-4 col-sm-12 animation-mid-block col-sm-12 d-flex justify-content-center">
                    <div className="w-100 mt-md-3 pt-3">
                        <div className="text-center mb-xs-5">
                        <h1 className="display-4 lh-1 mb-1 text-secondary-dark letter-spacing-normal">We Take Your Accounting Matters Seriously</h1>
                        <p className="w-100 fs-4 text mb-4 text-secondary-dark">So You Don't Have To</p>
                        <p className="w-100 fs-5 text fw-bold mb-0 text-secondary-dark">Instant Accounting At A Price You Can Afford</p>
                        <p className="w-100 mt-6 font-size-4 mb-0 text-dark letter-spacing-normal">Need to switch from an old accountant? It’s easy - we’ll help.</p>
                        <p className="w-100 fs-5 text pt-4 pb-3 fw-bold text-secondary-dark">Click <Link to="/get-a-quote/1" className="text-bg-info text-decoration-none">here</Link> to get a free quote for our monthly accounting service. </p>
                        </div>
                    </div>
                </div>
            <div className="animation-right col-lg-3 col-md-4 col-sm-12 ps-0 p-md-0">
                <span ref={animRightContainer}></span>
            </div>
        </div>
        </div>
  )}
  
  export default Hero2
  