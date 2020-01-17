import React from "react"
import logo from "../images/logo.png"
import Navigation from "./navigation"

const toolbarStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F9FAFB",
  justifyContent: "flex-start",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}

const Toolbar = ({ menuLinks }) => {
  console.log(menuLinks)
  return (
    <div style={toolbarStyle}>
      <img style={{ margin: "5px 65px" }} src={logo} alt="logo" />
      <Navigation menuLinks={menuLinks} />
    </div>
  )
}

export default Toolbar
