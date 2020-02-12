import React, { Component } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import LoginBox from "../components/login"
import Picture1 from "../images/stretch_sit.jpg"
import Picture2 from "../images/Stretch_stand.jpg"

export default class index extends Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "4fr 2fr",
            gridColumnGap: "50px",
          }}
        >
          <div
            className="image-stack"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              position: "relative",
            }}
          >
            <div
              style={{
                margin: "10% 0 0 10%",
                gridColumn: "1/span 8",
                gridRow: "1",
                maxHeight: "580px",
                maxWidth: "437px",
                height: "580px",
                width: "437px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img src={Picture2} alt="sit" width="100%" height="100%" />
            </div>
            <div
              style={{
                margin: "21% 0 0 0",
                gridColumn: "6 / -1",
                gridRow: "1",
                maxHeight: "470px",
                maxWidth: "407px",
                height: "470px",
                width: "407px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                zIndex: "1",
              }}
            >
              <img src={Picture1} alt="stand" width="100%" height="100%" />
            </div>
          </div>
          <div
            className="login-box"
            style={{ width: "auto", margin: "auto", marginRight: "50px" }}
          >
            <Header headerText="Change starts with you" />
            <LoginBox></LoginBox>
          </div>
        </div>
      </Layout>
    )
  }
}
