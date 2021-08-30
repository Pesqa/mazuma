import React from "react"
import Slider from "react-slick";
import review1 from "../assets/images/reviews/review-1.png"
import review2 from "../assets/images/reviews/review-2.png"
import review3 from "../assets/images/reviews/review-3.png"
import review4 from "../assets/images/reviews/review-4.png"
import review5 from "../assets/images/reviews/review-5.png"
import review6 from "../assets/images/reviews/review-6.png"
const Testimonials = () => {
    const reviews = [
        {
            "img" : review1,
            "title" : "Excellent customer services",
            "review" : "Excellent customer services. Extremely friendly and helpful. I have been using Mazuma since May 2013 and they are the best. Great accountancy and excellent prices, love the monthly accounts. I would highly recommend them. Five star"
        },
        {
            "img" : review2,
            "title" : "First class service",
            "review" : "Been with Mazuma for many years and always found them first class in accountancy and customer services."
        },
        {
            "img" : review3,
            "title" : "Great service and advise..",
            "review" : "Great service and advice... always there when needed and great value for money! Thank you to the team at Mazuma!"
        },
        {
            "img" : review4,
            "title" : "Wouldn’t dream of using anyone else",
            "review" : "Wouldn’t dream of using anyone else. Mazuma have been with us from the start of our business and their advice has been invaluable. Their customer service is second to none; like having good friends help out. Excellent all round service."
        },
        {
            "img" : review5,
            "title" : "Mazuma offers a great and reasonably priced service",
            "review" : "In our third year with Mazuma. In the beginning, we had an easy onboarding process. Recently, things become much more efficient as they've created dedicated Mazuma contact."
        },
        {
            "img" : review6,
            "title" : "I have been with Mazuma since starting…",
            "review" : "I have been with Mazuma since starting up as a soul trader and have found the service they deliver excellent, I am always recommending them to others. Keep up all the good work team."
        },
    ]

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,        
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
                centerPadding: "60px",
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
                breakpoint: 1199,
                settings: {
                  centerPadding: "20px",
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
            {
              breakpoint: 991,
              settings: {
                centerPadding: "10px",
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
                        {reviews.map((item, index) => {
                          return (
                            <div key={index}>
                                <div className="testimonial-item shadow d-flex flex-column bg-white rounded-3 mx-lg-3 mx-md-3 p-md-3 m-md-5 my-sm-5 mx-sm-3 p-sm-3 ">                        
                                    <div className="w-100 d-flex justify-content-start flex-row align-items-center">
                                        <div className="bg-white circle-55">                                      
                                            <img src={item.img} alt={item.title} className="rounded-circle p-0 m-0 w-100"/>
                                        </div>
                                        <div className="ps-3">
                                            <h4 className="fs-4 text my-0 py-0 lh-sm mb-0 text-secondary-dark">{item.title}</h4>
                                        </div>
                                    </div>                        
                                    <p className="mt-1 mb-0 text-dark">{item.review}</p>
                                
                                </div>
                            </div>
                            )
                        })}
                {/* <div>
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
                </div> */}
            </Slider>
        </div>
    )
} 
export default Testimonials