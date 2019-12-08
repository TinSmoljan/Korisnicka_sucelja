import React, { Component } from "react"
import { Link } from "gatsby"

const toolbarStyle = {
    display: "flex",
    backgroundColor: "#F9FAFB",
    padding: "6px 8px",
    justifyContent: "flex-start",
};

class Toolbar extends Component {
    render() {
        return (
            <div style={toolbarStyle}>
                <img src={"..\images\logo.png"} alt="logo" />;
                <Link to="exercises">Exercises</Link>
            </div>
        );
    }
}

export default Toolbar;