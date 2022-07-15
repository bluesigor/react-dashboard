/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.scss'
import logo from './images/logo.svg'
import showlogo from './images/active.svg'
import { useLoginContext } from '../../contexts/LoginContext'
const Login = () => {
  const { formik, showPassword, togglePassword } = useLoginContext()

  return (
    <div className="outer">
      <form onSubmit={formik.handleSubmit} className="outer-inner">
        <section className="outer-inner-logo">
          <a href="../index.html">
            <img src={logo} alt="logo" />
            <h4> Dashboard Kit </h4>{' '}
          </a>{' '}
        </section>{' '}
        <section className="outer-title">
          <h3> Log In to Dashboard Kit </h3>{' '}
          <p> Enter your email and password below </p>{' '}
        </section>{' '}
        <section className="outer-input">
          <div className="outer-input-email">
            <label htmlFor="email"> EMAIL </label>{' '}
            <input
              onChange={formik.handleChange}
              type="text"
              value={formik.values.email}
              id="email"
              placeholder="Email address"
              name="email"
            />
            {formik.errors.email ? (
              <p className="outer-wrong">{formik.errors.email}</p>
            ) : null}
          </div>{' '}
          <div className="outer-input-password">
            <div className="label-block">
              <label id="password-label" htmlFor="password">
                PASSWORD{' '}
              </label>{' '}
              <label id="forgot-label" htmlFor="password">
                Forgot password ?
              </label>{' '}
            </div>{' '}
            <input
              onChange={formik.handleChange}
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              id="password"
              placeholder="Password"
              name="password"
            />
            {formik.errors.password ? (
              <p className="outer-wrong">{formik.errors.password}</p>
            ) : null}
            <div className="outer-input-password-show__logo">
              <button onClick={togglePassword} type="button">
                <img src={showlogo} alt="showlogo" />
              </button>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <button type="submit" className="outer-login-btn">
          Submit{' '}
        </button>{' '}
        <h4 className="outer-signup">
          Don 't have an account? <a href="#"> Sign up </a>{' '}
        </h4>{' '}
      </form>{' '}
    </div>
  )
}

export default Login
