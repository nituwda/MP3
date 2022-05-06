import React, { useState } from "react";
import "./Login.css";

export default function LandingMessage() {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signUp, setSignUp] = useState(false)


  // const signup = () => {
  //   setRegister(true);
  // };

  // const login = () => {
  //   setRegister(false);
  // };

  const handleFirstNameChange = (e) => {
    setRegister({...register, firstName:e.target.value});
  }

  const handleLastNameChange = (e) => {
    setRegister({...register, lastName:e.target.value});
  }

  const handleEmailChange = (e) => {
    setRegister({...register, email:e.target.value});
  }

  const handlePasswordChange = (e) => {
    setRegister({...register, password:e.target.value});
  }

  const handleSignUpChange = (e) => {
    e.preventDefault();
    setSignUp(true);
  }

  // const handleEmail = (e) => {
  //   setRegister({...register, email:e.target.value});
  // };

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
          <button type="submit" className="sign-up" onClick={signUp}>
            register
          </button>
        </div>

      ) : (
        <div>
          {/* register */}
          {signUp ? <div className="success-message"> Registration Successful </div>: null } 
          <h1> Welcome </h1>
          <p> You don't have an account yet? </p>
          <p> Let's create now! </p>
          <form className="reg-form" onSubmit={handleSignUpChange}>
            <input type="text" placeholder="First Name" value={register.firstName} 
            onChange={handleFirstNameChange}/>
            <span></span>
            <input type="text" placeholder="Last Name" value={register.lastName}
            onChange={handleLastNameChange}/>
            <input type="email" placeholder="Email" className="input" value={register.email}
            onChange={handleEmailChange} />
            <input type="Password" placeholder="Password" className="input" value={register.password}
            onChange={handlePasswordChange} />
            <br />
            <button type="submit" className="sign-up">
              register
            </button>
          </form>
          <hr />
          <p> You don't have an account yet? </p>
          <button type="submit" className="log-in" onClick={signUp}>
            log in
          </button>
        </div>
      )}
    </div>
  );
}
