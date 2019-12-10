import React, { Component } from "react"
import logo from "../images/logo.png"
import Navigation from "./navigation"

const toolbarStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F9FAFB",
  justifyContent: "flex-start",
}

const toolbarStyle2 = {
  display: "flex",
  width: "300px",
  backgroundColor: "#F9FAFB",
  justifyContent: "space-around",
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
