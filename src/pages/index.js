import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/common/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import HappyClients from "../components/happyClients"

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false)  
  const openModal = ()=>{
    setOpen(true)
  }
  return (
  <Layout page="home">
    <Seo title="Home" />
    <Hero/>    
    <div className="d-flex justify-content-center bg-light">
      <div className="container">
        <StaticImage src="../assets/images/clients-img.png" alt="" className="d-md-block d-none"/>
      </div>
    </div>
    <HappyClients/>
    <div className="pt-md-5 mt-md-5 pt-sm-5 mt-sm-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <h2 className="display-5 mb-6 w-100">Renters insurance starting from 4 € a month</h2>
            <p className="fs-6 mb-0">100% digital. No paperwork. Sign up in seconds.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100"><StaticImage src="../assets/images/living-room.jpg" className="w-100"/></div>
    
    <div className="pt-md-5 pt-sm-4 bg-light">
      <div className="container mt-md-5 mt-sm-4">
      <div className="row d-flex justify-content-center pb-md-5 pm-sm-3">
          <div className="col-xl-7 col-lg-6 col-md-6 col-sm-9 text-center">
            <h2 className="display-5 mb-6 w-100">Instant Everything</h2>
            <p className="font-size-6 text-dark">Maya, our charming artificial intelligence bot, will craft the perfect coverage for you. It couldn't be easier, or faster.</p>
            <div className="video-pop mb-lg-25 mb-10 d-flex justify-content-center">            
              <a onClick={openModal} className="text-bg-info fs-6 text-decoration-none">
              <svg viewBox="0 0 1200 1200"><path d="M 600,1200 C 268.65,1200 0,931.35 0,600 0,268.65 268.65,0 600,0 c 331.35,0 600,268.65 600,600 0,331.35 -268.65,600 -600,600 z M 450,300.45 450,899.55 900,600 450,300.45 z" id="path16995" /></svg>See the Lemonade App in action</a>
            </div>
          </div> 
        </div>    
        <div className="row d-flex justify-content-center pt-md-5 pt-sm-3">     
          <div className="col-xl-5 col-lg-7 col-md-9">
            <StaticImage src="../assets/images/mob_app.png"/>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-lg-5 pb-lg-5 pb-md-5 py-md-5 py-sm-4">
      <div className="container my-lg-4 my-md-4 my-sm-4">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-lg-7 col-md-9">
            <h2 className="display-5 mb-lg-5 mb-md-5 w-100">Already insured?
              Switch to Lemonade instantly</h2>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-4 col-xs-12 d-flex flex-column justify-content-center text-center">
            <div><StaticImage src="../assets/images/policy_1.png" className="w-auto"/></div>
            <h3 className="display-6 my-md-3 py-md-3">Get your<br /> Lemonade policy</h3>
          </div>
          <div className="col-lg-4 col-xs-12 d-flex flex-column justify-content-center text-center">
            <div><StaticImage src="../assets/images/policy_2.png" className="w-auto"/></div>
            <h3 className="display-6 my-md-3 py-md-3"> Give us your old<br />
              policy details</h3>
          </div>
          <div className="col-lg-4 col-xs-12 d-flex flex-column justify-content-center text-center">
            <div><StaticImage src="../assets/images/policy_3.png" className="w-auto"/></div>
            <h3 className="display-6 my-md-3 py-md-3"> We'll handle all<br />
              the paperwork</h3>
          </div>          
        </div>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-bg-info text-light fw-bold text-uppercase fs-6 shadow-lg text lh-lg py-md-2 px-md-3 py-sm-2 px-sm-3">Check Prices And Switches</button>
          </div>        
        </div>
      </div>
    </div>
    <div className="pt-md-5 pb-md-0 bg-light py-sm-4 border border-1 border-top-0 border-start-0 border-end-0 border-bottom border-dark-light">
      <div className="container mt-md-4 my-sm-4">
        <div className="row justify-content-center text-center">
          <div className="col-xl-9 col-lg-9 col-md-7">
          <h2 className="display-5 mb-md-2 mb-sm-2 w-100">How Lemonade Works</h2>
          <p className="fs-5 text-dark">Lemonade reverses the traditional insurance model. We treat the premiums you pay as if it's your money, not ours. With Lemonade, everything becomes simple and transparent. We take a flat fee, pay claims super fast, and what's left to causes you care about.*</p>
          </div>
          <div className="col-xl-9 col-lg-12 col-md-9 py-md-5 py-sm-4">
            <StaticImage src="../assets/images/pizza.jpg" className="d-md-block d-none"/>
            <div className="work_blk d-none"> <img className="mb-4" src="images/pizza-1.png" alt=""/>
              <p className="mb-15">A flat fee to run everything</p>
              <img className="mb-4" src="images/pizza-2.png" alt=""/>
              <p className="mb-15">We pay claims <b>super fast</b></p>
              <img className="mb-4" src="images/pizza-3.png" alt=""/>
              <p className="mb-lg-15 mb-10">If there's money leftover, we <b>give it back to causes</b></p>
            </div>
            <p className="fs-6 text-dark pt-md-5">* Subject to board discretion and the company meeting certain financial standards. <a href="#">Read more here</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className="py-md-2 bg-light py-sm-4">
    <div className="container my-md-5 my-sm-4">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-12">
            <div className="row">
              <div className="col-md-6 col-xs-12 py-sm-2">
                <div className="d-flex">
                  <div className="mb-md-5 me-md-4 circle-55">
                    <StaticImage src="../assets/images/b-corp.png"/>
                  </div>
                  <div className="rgt_blk">
                    <h3 className="display-7">Designed for Social Impact</h3>
                    <p className="fs-6 text text-dark lh-base">Lemonade Inc. is a Public Benefit Corporation and certified B-Corp. Social impact is part of our legal mission and business model - not just marketing fluff.*</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 py-sm-2">
                <div className="d-flex mt-md-0 mt-sm-10">
                  <div className="mb-md-5 me-md-4 circle-55">
                    <StaticImage src="../assets/images/a-rated.png"/>
                  </div>
                  <div className="rgt_blk">
                    <h3 className="display-7">A-Rated and Backed by Giants</h3>
                    <p className="fs-6 text text-dark lh-base">Lemonade is <a href="#">rated</a> A-Exceptional, fully licensed, and reinsured by some of the most trusted names on the planet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
)
}

export default IndexPage
