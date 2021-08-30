import React, { createRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Logos = () => { 
    const { Logos } = useStaticQuery(
        graphql`
          query {
            Logos : allFile(
                filter: {relativeDirectory: {eq: "logos"}}
                sort: {fields: base, order: ASC}
              ) {
                edges {
                  node {
                    childImageSharp {
                      gatsbyImageData(quality: 100, width: 200)
                    }
                  }
                }
              }
          }
        `
      )     
    return(
      <div className="d-flex justify-content-center bg-white">
        <div className="container d-flex flex-row justify-content-between">
          {Logos.edges.map(({node}, index) => {
              return(
                  <GatsbyImage
                      alt={node.imgalt}
                      image={getImage(node)} 
                      className="px-2"
                  />
              )
          })} 
        </div>
      </div>
  )}
  
  export default Logos