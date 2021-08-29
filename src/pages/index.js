import React, { useState } from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/common/layout"
import Seo from "../components/seo"
import Hero2 from "../components/hero2"
import HappyClients from "../components/happyClients"
import ModalBox from '../components/ModalBox'

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false)  
  const [modalShow, setModalShow] = React.useState(false);
  const openModal = ()=>{
    setOpen(true)
  }
  return (
  <Layout page="home">
    <Seo title="Home" />
    <Hero2/>    
    <div className="d-flex justify-content-center bg-light">
      <div className="container">
        <StaticImage src="../assets/images/clients-img.png" alt="" className="d-md-block d-none"/>
      </div>
    </div>
    <HappyClients />
    <div className="renters-block pt-md-5 mt-md-5 pt-sm-5 mt-sm-5">
      <div className="container pb-5 mb-5">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <h2 className="display-5 mb-6 w-100">Business Accounting From <span>&#163;</span>28 a Month</h2>
            <p className="fs-6 mb-0">100% digital. No paperwork. Sign up in seconds.</p>
            <Link to="/get-a-quote/1" className="btn btn-primary fw-bold shadow rounded-sm shadow-4 mt-4 mb-3 text-uppercase">Get a free quote in seconds here</Link>
          </div>
        </div>
        
      </div>
    </div>
    <div className="pt-md-5 pt-sm-4 bg-light">
      <div className="container mt-md-5 mt-sm-4">
      <div className="row d-flex justify-content-center pb-md-5 pm-sm-3">
          <div className="col-xl-7 col-lg-6 col-md-6 col-sm-9 text-center">
            <h2 className="display-5 mb-6 w-100">Accounting Done Right</h2>
            <p className="font-size-6 text-dark">Our team of qualified chartered accountants will manage all your accounting needs, from monthly booking to end-of-year tax returns. Let us do the hard work and free up your time to focus on other aspects of running a business - or simply relax.</p>
            <div className="video-pop mb-lg-25 mb-10 d-flex justify-content-center">            
              <a onClick={openModal} className="text-bg-info fs-6 text-decoration-none">
              <svg viewBox="0 0 1200 1200"><path d="M 600,1200 C 268.65,1200 0,931.35 0,600 0,268.65 268.65,0 600,0 c 331.35,0 600,268.65 600,600 0,331.35 -268.65,600 -600,600 z M 450,300.45 450,899.55 900,600 450,300.45 z" id="path16995" /></svg><span onClick={() => setModalShow(true)}>See how the Mazuma app works</span></a>
            </div>
          </div> 
        </div>    
        <div className="row d-flex justify-content-center pt-md-4 pt-sm-3">     
          <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12">
            <StaticImage src="../assets/images/phone-sec.png"/>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-lg-5 pb-lg-4 pb-md-4 py-md-5 py-sm-4">
      <div className="container my-lg-4 my-md-4 my-sm-4">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-lg-7 col-md-9">
            <h2 className="display-5 mb-lg-3 mb-md-2 w-100">Already Have an Accountant? Switch to Mazuma</h2>
            <p className="font-size-6 text-dark mb-lg-2 mb-md-2 w-100">We’ll handle the admin of switching for you. And don’t worry, you won’t have to have an awkward conversation with your accountant - we’ll arrange for your information to be transferred directly to us. </p>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-4 col-xs-12 px-5 d-flex flex-column justify-content-center text-center">
            <div><StaticImage src="../assets/images/get-started.png" className="w-auto"/></div>
            <h3 className="display-6 my-md-3 py-md-3 px-2">Get Started with Mazuma</h3>
          </div>
          <div className="col-lg-4 col-xs-12 px-5 d-flex flex-column justify-content-center text-center">
            <div><StaticImage src="../assets/images/paperwork.png" className="w-auto"/></div>
            <h3 className="display-6 my-md-3 py-md-3 px-2">Send Us Your Paperwork and Receipts</h3>
          </div>
          <div className="col-lg-4 col-xs-12 px-5 d-flex flex-column justify-content-center text-center">
            <div><StaticImage src="../assets/images/handle-everything.png" className="w-auto"/></div>
            <h3 className="display-6 my-md-3 py-md-3 px-2">We'll Handle Everything for You</h3>
          </div>          
        </div>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
          <Link to="/get-a-quote/1" className="btn btn-primary fw-bold shadow rounded-sm shadow-4 mt-4 mb-3 text-uppercase">Click here to check our pricing and switch to Mazuma today.</Link>
          </div>        
        </div>
      </div>
    </div>
    <div className="pt-md-5 pb-md-0 bg-light py-sm-4 border border-1 border-top-0 border-start-0 border-end-0 border-bottom border-dark-light">
      <div className="container mt-md-4 my-sm-4">
        <div className="row justify-content-center text-center">
          <div className="col-xl-9 col-lg-9 col-md-7">
          <h2 className="display-5 mb-md-4 mb-sm-3 w-100">How Mazuma Works</h2>
          <p>As your business grows, so do your finances. Receipts pile up, invoices aren't sent out, and timelines slip. The system you've used for four clients just can’t keep up with 40, and it certainly won't work for 400. You’ve tried logging your finances on Excel, but you know that you can't run your business with a rat's nest of spreadsheets forever.</p>
          <p>You need a proper system managed by professional accountants to help you stay organised, scalable, and focused. You need someone that can handle the basics - so you have the time to handle the big picture.</p>
          <p>Mazuma’s bookkeeping and monthly accounting services have got you covered. We manage all the essentials - receipts, invoices, payments - so you don't have to. At the end of the financial year, we’re here to submit your taxes and VAT on your behalf, saving you the last-minute panic and a potential fine from HM Revenue for inaccuracy. </p>
          <p>When you work with us, you’ll get your own dedicated accountant, who will get to know your business and offer tailored, top-quality accounting advice whenever you need it. </p>
          <p>We’re completely flexible, so you’re free to choose as many of our services that suit your budget and requirements. We know that accountants are a necessity in today’s world, and we don’t believe you should have to scrape together the cash for this essential aspect of business management. </p>
          <p>Let us sweat the small stuff so you can focus purely on your day-to-day work. Whether you want to expand or maintain your business or simply keep your sideline running smoothly, Mazuma will take care of the details while you take care of business.</p>
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
                <div className="d-flex align-items-center">
                  <div className="mb-md-5 me-md-4 circle-55">
                    <div className="border border-3 rounded-3 p-1 border-dark bg-white">
                      <StaticImage src="../assets/images/winner-1.png" />       
                    </div>                    
                  </div>
                  <div className="rgt_blk">
                    <h3 className="display-7">Accounts and Tax Advisor of the Year </h3>
                    <p className="fs-6 text text-dark lh-base">Mazuma won the prestigious Accounts and Tax Advisor of the Year award at the British Business Awards 2019</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 py-sm-2">
              <div className="d-flex align-items-center">
                  <div className="mb-md-5 me-md-4 circle-55">
                   <div className="border border-3 rounded-3 p-1 border-dark bg-white">
                      <StaticImage src="../assets/images/winner-2.png" />       
                    </div>                     
                  </div>
                  <div className="rgt_blk">
                    <h3 className="display-7">British Accountancy Awards Winner</h3>
                    <p className="fs-6 text text-dark lh-base">Mazuma won the prestigious Small Practice Innovation of the Year award at the British Accountancy Awards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalBox
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </Layout>
)
}

export default IndexPage
