import React from "react"
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"
const Testimonials = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                centerPadding: "5px",
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      };
    return(
        <div className="pt-md-2 pt-sm-2">
            <Slider {...settings}>
                <div>
                    <div className="testimonial-item shadow d-flex flex-column bg-white rounded-3 mx-md-3 p-md-3 m-md-5 m-sm-5 p-sm-3 ">                        
                        <div className="w-100 d-flex justify-content-start flex-row align-items-center">
                            <div className="bg-white circle-55">
                                <StaticImage src="../assets/images/author.png" alt=""/>
                            </div>
                            <div className="ps-3">
                                <p className="fs-6 text lh-sm mb-0 text-secondary-dark">Instant Chat</p>
                                <p className="fs-6 text lh-sm mb-0 text-dark">jennifer_troyer</p>
                            </div>
                        </div>                        
                        <p className="fs-6 text lh-base mt-2 mb-0 text-dark">I just learned about Mazuma this morning and now they have a new customer. I swear it was one of the most enjoyable conversion and onboarding experiences I’ve had…maybe ever. I kind of want to do it all over again, Well done!</p>
                      
                    </div>
                </div>
                <div>
                    <div className="testimonial-item shadow d-flex flex-column bg-white rounded-3 mx-md-3 p-md-3 p-sm-3 m-md-5 m-sm-5">                        
                        <div className="w-100 d-flex justify-content-start flex-row align-items-center">
                            <div className="bg-white circle-55">
                                <StaticImage src="../assets/images/author.png" alt=""/>
                            </div>
                            <div className="ps-3">
                                <p className="fs-6 text lh-sm mb-0 text-secondary-dark">Instant Chat</p>
                                <p className="fs-6 text lh-sm mb-0 text-dark">jennifer_troyer</p>
                            </div>
                        </div>                        
                        <p className="fs-6 text lh-base mt-2 mb-0 text-dark">I just learned about Mazuma this morning and now they have a new customer. I swear it was one of the most enjoyable conversion and onboarding experiences I’ve had…maybe ever. I kind of want to do it all over again, Well done!</p>
                      
                    </div>
                </div>
                <div>
                    <div className="testimonial-item shadow d-flex flex-column bg-white rounded-3 mx-md-3 p-md-3 p-sm-3 m-md-5 m-sm-5">                        
                        <div className="w-100 d-flex justify-content-start flex-row align-items-center">
                            <div className="bg-white circle-55">
                                <StaticImage src="../assets/images/author.png" alt=""/>
                            </div>
                            <div className="ps-3">
                                <p className="fs-6 text lh-sm mb-0 text-secondary-dark">Instant Chat</p>
                                <p className="fs-6 text lh-sm mb-0 text-dark">jennifer_troyer</p>
                            </div>
                        </div>                        
                        <p className="fs-6 text lh-base mt-2 mb-0 text-dark">I just learned about Mazuma this morning and now they have a new customer. I swear it was one of the most enjoyable conversion and onboarding experiences I’ve had…maybe ever. I kind of want to do it all over again, Well done!</p>
                      
                    </div>
                </div>
                <div>
                    <div className="testimonial-item d-flex flex-column bg-white rounded-3 mx-md-3 p-md-3 p-sm-3 m-md-5 m-sm-5">                        
                        <div className="w-100 d-flex justify-content-start flex-row align-items-center">
                            <div className="bg-white circle-55">
                                <StaticImage src="../assets/images/author.png" alt=""/>
                            </div>
                            <div className="ps-3">
                                <p className="fs-6 text lh-sm mb-0 text-secondary-dark">Instant Chat</p>
                                <p className="fs-6 text lh-sm mb-0 text-dark">jennifer_troyer</p>
                            </div>
                        </div>                        
                        <p className="fs-6 text lh-base mt-2 mb-0 text-dark">I just learned about Mazuma this morning and now they have a new customer. I swear it was one of the most enjoyable conversion and onboarding experiences I’ve had…maybe ever. I kind of want to do it all over again, Well done!</p>
                      
                    </div>
                </div>
                <div>
                    <div className="testimonial-item d-flex flex-column bg-white rounded-3 mx-md-3 p-md-3 p-sm-3 m-md-5 m-sm-5">                        
                        <div className="w-100 d-flex justify-content-start flex-row align-items-center">
                            <div className="bg-white circle-55">
                                <StaticImage src="../assets/images/author.png" alt=""/>
                            </div>
                            <div className="ps-3">
                                <p className="fs-6 text lh-sm mb-0 text-secondary-dark">Instant Chat</p>
                                <p className="fs-6 text lh-sm mb-0 text-dark">jennifer_troyer</p>
                            </div>
                        </div>                        
                        <p className="fs-6 text lh-base mt-2 mb-0 text-dark">I just learned about Mazuma this morning and now they have a new customer. I swear it was one of the most enjoyable conversion and onboarding experiences I’ve had…maybe ever. I kind of want to do it all over again, Well done!</p>
                      
                    </div>
                </div>
                <div>
                    <div className="testimonial-item d-flex flex-column bg-white rounded-3 mx-md-3 p-md-3 p-sm-3 m-md-5 m-sm-5">                        
                        <div className="w-100 d-flex justify-content-start flex-row align-items-center">
                            <div className="bg-white circle-55">
                                <StaticImage src="../assets/images/author.png" alt=""/>
                            </div>
                            <div className="ps-3">
                                <p className="fs-6 text lh-sm mb-0 text-secondary-dark">Instant Chat</p>
                                <p className="fs-6 text lh-sm mb-0 text-dark">jennifer_troyer</p>
                            </div>
                        </div>                        
                        <p className="fs-6 text lh-base mt-2 mb-0 text-dark">I just learned about Mazuma this morning and now they have a new customer. I swear it was one of the most enjoyable conversion and onboarding experiences I’ve had…maybe ever. I kind of want to do it all over again, Well done!</p>
                      
                    </div>
                </div>
                <div>
                    <div className="testimonial-item d-flex flex-column bg-white rounded-3 mx-md-3 p-md-3 p-sm-3 m-md-5 m-sm-5">                        
                        <div className="w-100 d-flex justify-content-start flex-row align-items-center">
                            <div className="bg-white circle-55">
                                <StaticImage src="../assets/images/author.png" alt=""/>
                            </div>
                            <div className="ps-3">
                                <p className="fs-6 text lh-sm mb-0 text-secondary-dark">Instant Chat</p>
                                <p className="fs-6 text lh-sm mb-0 text-dark">jennifer_troyer</p>
                            </div>
                        </div>                        
                        <p className="fs-6 text lh-base mt-2 mb-0 text-dark">I just learned about Mazuma this morning and now they have a new customer. I swear it was one of the most enjoyable conversion and onboarding experiences I’ve had…maybe ever. I kind of want to do it all over again, Well done!</p>
                      
                    </div>
                </div>
            </Slider>
        </div>
    )
}
  
export default Testimonials