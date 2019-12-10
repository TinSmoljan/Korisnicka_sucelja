import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Toolbar from "./toolbar"

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

  console.log("Layout data:", data)

  return (
    <div>
      <Toolbar menuLinks={data.site.siteMetadata.menuLinks} />
      {children}
    </div>
  )
}

export default Layout
