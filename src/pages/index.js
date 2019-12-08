import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Toolbar from "../components/toolbar"

export default () => (
    <div style={{ color: `purple` }}>
        <Toolbar />
        <Header headerText="Hello Gatsby!" />
        <h1>Strenghten your body</h1>
        <p>Bring positive change to your lifestyle</p>
        <button onclick="location.href='C:\Users\Korisnik\Desktop\Gatsby_project\hello-world\src\pages\main_menu.js'">Click me</button>
    </div>
)


