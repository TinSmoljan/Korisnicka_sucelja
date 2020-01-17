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
    <div>
      <div>
        <Toolbar menuLinks={data.site.siteMetadata.menuLinks} />
      </div>
      <StyledBackgroundSection>{children}</StyledBackgroundSection>
    </div>
  )
}

export default Layout
