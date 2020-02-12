import React from "react"
import HeaderSmall from "../components/header_small"

const loginBoxStyle = {
  padding: "0",
  backgroundColor: "#F9FAFB",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  margin: "0",
  boxSizing: "border-box",
}

const LoginBox = () => {
  return (
    <div style={loginBoxStyle}>
      <div id="form_wrapper">
        <div
          id="form_right"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: "20px",
            padding: "10% 5%",
          }}
        >
          <div className="login_text">
            <HeaderSmall headerText="Member login" />
          </div>

          <div class="input_container">
            <i class="fas fa-envelope"></i>
            <input
              style={{ width: "100%" }}
              placeholder="Email"
              type="email"
              name="Email"
              id="field_email"
              class="input_field"
            />
          </div>
          <div class="input_container">
            <i class="fas fa-lock"></i>
            <input
              style={{ width: "100%" }}
              placeholder="Password"
              type="password"
              name="Password"
              id="field_password"
              class="input_field"
            />
          </div>
          <input
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "center",
              cursor: "pointer",
              transitionDuration: "0.4s",
              padding: "15px 32px",
            }}
            type="submit"
            value="Login"
            id="input_submit"
            class="input_field"
          />
          <input
            type="submit"
            value="I'm a guest"
            id="guest_submit"
            class="guest_field"
          />
        </div>
      </div>
    </div>
  )
}

export default LoginBox
