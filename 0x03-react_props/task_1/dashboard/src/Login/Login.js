import "./Login.css";
import React from "react";

function Login() {
  return (
    <div className="App">
      <body className="Login">
        <p
          style={{
            display: "inline-block",
            position: "absolute",
            top: "40%",
            left: "-2%",
          }}
        >
          Login to access the full dashboard
        </p>
        <label
          For="email"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "1.3%",
          }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "4%",
          }}
        />
        <label
          For="pwd"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "15%",
          }}
        >
          Password:{" "}
        </label>
        <input
          type="password"
          id="pwd"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "19.5%",
          }}
        />
        <button
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "30%",
          }}
        >
          OK
        </button>
      </body>
    </div>
  );
}

export default Login;
