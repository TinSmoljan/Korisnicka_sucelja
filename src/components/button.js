import React, { Component } from "react"

const buttonStyle = {
  background: "#5388B8",
  border: "2px solid",
  borderRadius: "10px",
  width: "210px",
  height: "70px",
  textAlign: "center",
  fontSize: "24px",
  font: "Montserrat",
  fontStyle: "normal",
  fontWeight: "normal",
  color: "#ffffff",
}

class Button extends Component {
  render() {
    return <button style={buttonStyle}></button>
  }
}
export default Button
