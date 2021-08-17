import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/common/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false)  
  const openModal = ()=>{
    setOpen(true)
  }
  return (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <div className="d-flex justify-content-center bg-light">
      <div className="container">
        <StaticImage src="../assets/images/clients-img.png" alt="" className="d-md-block d-none"/>
      </div>
    </div>
    <div className="pt-md-5 mt-md-5 pt-sm-5 mt-sm-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <h2 className="display-6 mb-6 w-100">Renters insurance starting from 4 € a month</h2>
            <p className="fs-6 mb-0">100% digital. No paperwork. Sign up in seconds.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100"><StaticImage src="../assets/images/living-room.jpg" className="w-100"/></div>
    <div className="py-md-4 py-sm-4 bg-light">
      <div className="container my-md-4 my-sm-4">
      <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-6 col-md-6 col-sm-9 text-center">
            <h2 className="display-6 mb-6 w-100">Instant Everything</h2>
            <p className="font-size-6 text-dark">Maya, our charming artificial intelligence bot, will craft the perfect coverage for you. It couldn't be easier, or faster.</p>
            <div className="video-pop mb-lg-25 mb-10 d-flex justify-content-center">            
              <a onClick={openModal} className="text-bg-info fs-6 text-decoration-none">
              <svg viewBox="0 0 1200 1200"><path d="M 600,1200 C 268.65,1200 0,931.35 0,600 0,268.65 268.65,0 600,0 c 331.35,0 600,268.65 600,600 0,331.35 -268.65,600 -600,600 z M 450,300.45 450,899.55 900,600 450,300.45 z" id="path16995" /></svg>See the Lemonade App in action</a>
            </div>
          </div>          
          {/* <div className="col-xl-5 col-lg-7 col-md-9"> <img src="images/mob_app.png" alt=""/> </div> */}
        </div>
      </div>
    </div>
  </Layout>
)
}

export default IndexPage
