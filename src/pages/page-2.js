import React from "react";


import Layout from "../components/common/layout"
import Seo from "../components/seo"
import Hero2 from "../components/hero2"

const SecondPage = () => {
  return(
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <Hero2/>    
  </Layout>
)}

export default SecondPage
