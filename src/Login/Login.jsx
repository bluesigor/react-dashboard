/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Login.scss'
import logo from '../images/logo.svg'
import showlogo from '../images/active.svg'
const Login = () => {
  return (
    <div className="outer">
      <main className="inner">
        <section className="logo">
          {/* Redirecting to Overview page */}
          <a href="../index.html">
            <img src={logo} alt="logo" />
            <h4>Dashboard Kit</h4>
          </a>
          {/*  */}
        </section>
        <section className="title">
          <h3>Log In to Dashboard Kit</h3>
          <p>Enter your email and password below</p>
        </section>
        <section className="input">
          <div className="email">
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email address"
            />
          </div>
          <div className="password">
            <div className="label-block">
              <label id="password-label" htmlFor="password">
                PASSWORD
              </label>
              <label id="forgot-label" htmlFor="password">
                Forgot password?
              </label>
            </div>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="password-show__logo">
              <button>
                <img src={showlogo} alt="showlogo" />
              </button>
            </div>
          </div>
        </section>
        <button className="login-btn">Log in</button>
        <h4 className="signup">
          Don't have an account?
          <a href="#">Sign up</a>
        </h4>
      </main>
    </div>
  )
}

export default Login
