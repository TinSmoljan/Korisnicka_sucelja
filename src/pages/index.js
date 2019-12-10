import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Gatsby!" />
      <h1>Strenghten your body</h1>
      <p>Bring positive change to your lifestyle</p>
      <button onclick="location.href='C:\Users\Korisnik\Desktop\Gatsby_project\hello-world\src\pages\main_menu.js'">
        Click me
      </button>
    </div>
  </Layout>
)
