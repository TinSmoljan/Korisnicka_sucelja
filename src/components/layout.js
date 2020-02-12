import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Toolbar from "./toolbar"
import StyledBackgroundSection from "../components/background"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
    }
  `)

  return (
    <body
      style={{
        maxHeight: "1080",
        maxWidth: "1920",
        height: "100%",
        width: "100%",
      }}
    >
      <div>
        <Toolbar menuLinks={data.site.siteMetadata.menuLinks} />
      </div>
      <div>
        <StyledBackgroundSection>{children}</StyledBackgroundSection>
      </div>
    </body>
  )
}

export default Layout
