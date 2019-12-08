import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"


const toolbarStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    justifyContent: "flex-start",
};

const toolbarStyle2 = {
    display: "flex",
    width: "300px",
    backgroundColor: "#F9FAFB",
    justifyContent: "space-around",
};

class Toolbar extends Component {
    render() {
        return (
            <div style={toolbarStyle}>
                <img style={{ margin: "5px 65px"}}src={logo} alt="logo" />
                <nav style={toolbarStyle2}>
                    <Link to="exercises">Exercises</Link>
                    <Link to="stats">Stats</Link>
                    <Link to="trends">Trends</Link>
                </nav>
                
            </div>
        );
    }
}

export default Toolbar;