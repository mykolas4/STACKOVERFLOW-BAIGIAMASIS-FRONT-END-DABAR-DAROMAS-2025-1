
import React, { useState } from "react";
import styles from "@/pages/Auth/styles.module.css";
import icon from "@/assets/icon.svg";
import AboutAuth from "./AboutAuth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <section class={styles.authsection}>
    {isSignup && <AboutAuth />}
    <h1>Create your account</h1>
    <div class={styles.authcontainer}>
      {!isSignup && (
        <img src={icon.src} alt="stackoverflow" className={styles.loginlogo} />
      )}
        {isSignup && (
          <label htmlFor="name">
            <h4>Display Name</h4>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div>
              <h4>Password</h4>

              {!isSignup && <h4></h4>}
            </div>
            <input type="password" name="password" id="password" />
            {isSignup && (
              <p>
                {" "}
                Must contain 8+ characters, including <br></br> at least 1
                letter and 1 number
              </p>
            )}
          </label>
          <button type="submit" className="authbtn">
            {isSignup ? "Sign up" : "Log in"}{" "}
          </button>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handleswitchbtn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
