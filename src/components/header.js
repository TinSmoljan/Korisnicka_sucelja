import React from "react"

export default props => (
  <h1
    style={{
      fontFamily: "Exo",
      fontStyle: "normal",
      fontSize: "70px",
      color: "#000000",
      mixBlendMode: "normal",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    }}
  >
    {props.headerText}
  </h1>
)
