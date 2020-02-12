import React, { Component } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "menu" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 400) {
                aspectRatio
                base64
                src
                srcSet
                height
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <body style={{ height: "100% !important" }}>
        <div
          className="menu-stack"
          style={{
            maxWidth: "1920",
            maxHeight: "1080",
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "2fr 2fr 2fr",
            gridColumnGap: "100px",
          }}
        >
          {data.allFile.edges.map(({ node }) => (
            <Img fixed={node.childImageSharp.fixed} />
          ))}
        </div>
      </body>
    </Layout>
  )
}
