import React, { useState } from "react";
import "./Login.css";

export default function LandingMessage() {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [valid, setValid] = useState(false);
  const [enter, setEnter] = useState(false);

  const reg = () => {
    setEnter(true);
  };

  const afterReg = () => {
    setEnter(false);
  };

  const handleFirstNameChange = (e) => {
    setRegister({ ...register, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setRegister({ ...register, lastName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setRegister({ ...register, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setRegister({ ...register, password: e.target.value });
  };

  const handleSignUpChange = (e) => {
    e.preventDefault();
    if (
      register.firstName &&
      register.lastName &&
      register.email &&
      register.password
    ) {
      setValid(true);
    }
    setSignUp(true);
  };

  const handleSignInChange = (e) => {
    e.preventDefault();
    if (
      
      register.email &&
      register.password
    ) {
      setValid(true);
    }
    setSignIn(true);
  };

  // const handleEmail = (e) => {
  //   setRegister({...register, email:e.target.value});
  // };

  return (
    <div className="container">
      {!register || enter ? (
        <div>
          <div>
          {signIn && valid ? (
            <div className="success-message">
              Login Successful! Welcome
            </div>
          ) : null}
            <h1> Welcome </h1>
            <p> Welcome back! We missed you... </p>
            <p> Please login to your account now. </p>

            <form className="login-form" onSubmit={handleSignInChange}>
              <input type="email" placeholder="Email" 
              value={register.email}
              onChange={handleEmailChange}
              disabled={valid}
              />
              {signIn && !register.email ? (
              <p id="email-error" className="error">
                Please enter your email
              </p>
            ) : null}

              <input type="Password" placeholder="Password" 
              value={register.password}
              onChange={handlePasswordChange}
              disabled={valid}
              />
              {signIn && !register.password ? (
              <p id="password-error" className="error">
                Please enter your password
              </p>
            ) : null}

              <button type="submit" className="log-in">
                log in
              </button>
            </form>

            <hr />

            <p> You don't have an account yet? </p>
            <button type="submit" className="sign-up" onClick={afterReg}>
              register
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* register */}
          {signUp && valid ? (
            <div className="success-message">
              Registration Successful! Now you can login.
            </div>
          ) : null}
          <h1> Welcome </h1>
          <p> You don't have an account yet? </p>
          <p> Let's create now! </p>
          <form className="reg-form" onSubmit={handleSignUpChange}>
            <input
              type="text"
              placeholder="First Name"
              value={register.firstName}
              onChange={handleFirstNameChange}
              disabled={valid}
            />
            {signUp && !register.firstName ? (
              <p id="first-name-error" className="error">
                Please enter your first name
              </p>
            ) : null}

            <input
              type="text"
              placeholder="Last Name"
              value={register.lastName}
              onChange={handleLastNameChange}
              disabled={valid}
            />
            {signUp && !register.lastName ? (
              <p id="last-name-error" className="error">
                Please enter your last name
              </p>
            ) : null}

            <input
              type="email"
              placeholder="Email"
              className="input"
              value={register.email}
              onChange={handleEmailChange}
              disabled={valid}
            />
            {signUp && !register.email ? (
              <p id="email-error" className="error">
                Please enter your email
              </p>
            ) : null}

            <input
              type="Password"
              placeholder="Password"
              className="input"
              value={register.password}
              onChange={handlePasswordChange}
              disabled={valid}
            />
            <br />
            {signUp && !register.password ? (
              <p id="password-error" className="error">
                Please enter your password
              </p>
            ) : null}
            {/* {signUp && (register.password <4) <p id="password-error"> Password must be more than 4 characters </p>: null} */}

            <button type="submit" className="sign-up">
              register
            </button>
          </form>
          <hr />
          <p> Already have an account? </p>
          <button type="submit" className="log-in" onClick={reg}>
            log in
          </button>
        </div>
      )}
    </div>
  );
}
