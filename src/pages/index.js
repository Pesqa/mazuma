import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <div className="container border border-primary">
      <div className="row">
        <div className="col-md-6 border border-primary"><p className="text-primary">Now go build something great.</p></div>
        <div className="col-md-6 border border-primary"><button className="btn btn-primary">Welcome</button></div>
      </div>
    </div>
    
    <button className="btn btn-primary">Welcome</button>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
