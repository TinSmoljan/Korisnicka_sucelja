import React from "react"
import { Link } from "gatsby"

const Navigation = ({ menuLinks }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "500px",
        justifyContent: "space-around",
      }}
    >
      {menuLinks.map(({ link, name }) => {
        return (
          <span key={link}>
            <Link to={link}>{name}</Link>
          </span>
        )
      })}
    </div>
  )
}

export default Navigation
