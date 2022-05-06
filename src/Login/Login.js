import React, { useState } from "react";
import "./Login.css";

export default function LandingMessage() {
  const [register, setRegister] = useState(false);
  const signup = () => {
    setRegister(true);
  };

  const login = () => {
    setRegister(false);
  };

  return (
    <div className="container">
      {!register ? (
        <div>
          <h1> Welcome </h1>
          <p> Welcome back! We missed you... </p>
          <p>Please login to your account now. </p>
          <form className="login-form">
            <input type="text" placeholder="Email" />
            <input type="Password" placeholder="Password" />
            <button type="submit" className="log-in">
              log in
            </button>
          </form>
          <hr />
          <p> You don't have an account yet? </p>
          <button type="submit" className="sign-up" onClick={signup}>
            register
          </button>
        </div>
      ) : (
        <div>
          <h1> Welcome </h1>
          <p> You don't have an account yet? </p>
          <p> Let's create now! </p>
          <form className="reg-form">
            <input type="text" placeholder="First Name" />
            <span></span>
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" className="input" />
            <input type="Password" placeholder="Password" className="input" />
            <br />
            <button type="submit" className="sign-up">
              register
            </button>
          </form>
          <hr />
          <p> You don't have an account yet? </p>
          <button type="submit" className="log-in" onClick={login}>
            log in
          </button>
        </div>
      )}
    </div>
  );
}
