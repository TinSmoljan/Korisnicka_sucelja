import React, { Component } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Picture1 from "../images/stretch_sit.jpg"
import Picture2 from "../images/Stretch_stand.jpg"

export default class index extends Component {
  render() {
    return (
      <Layout>
        <div style={{ width: "100%", height: "auto" }}>
          <div
            style={{
              height: "100vh",
              width: "auto",
              display: "grid",
              gridTemplateColumns: "4fr 2fr",
              gridColumnGap: "50px",
            }}
          >
            <div style={{ display: "flex", margin: "auto auto auto auto" }}>
              <img
                src={Picture1}
                alt="sit"
                position="absolute"
                width="80%"
                height="auto"
              />
              <img
                src={Picture2}
                alt="stand"
                position="absolute"
                width="30%"
                height="auto"
                z-index="-1"
              />
            </div>
            <div style={{ width: "auto", margin: "auto" }}>
              <Header headerText="Strenghten your body" />
              <p
                style={{
                  font: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "30px",
                  color: "#000000",
                }}
              >
                Bring positive change to your lifestyle
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
