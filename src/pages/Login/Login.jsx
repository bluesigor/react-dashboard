/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { useLoginContext } from '../../contexts/LoginContext'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import './style.scss'
import logo from './images/logo.svg'
import showlogo from './images/active.svg'

function Login() {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    showPassword,
    togglePassword,
  } = useLoginContext()

  return (
    <div className="outer">
      <Formik
        className=""
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="outer-inner">
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
              <Field
                type="text"
                id="email"
                placeholder="Email address"
                name="email"
              />
              <p className="outer-input-email-wrong">
                <ErrorMessage name="email" />
              </p>
            </div>{' '}
            <div className="outer-input-password">
              <div className="outer-input-password-label-block">
                <label id="password-label" htmlFor="password">
                  PASSWORD{' '}
                </label>{' '}
                <label id="forgot-label" htmlFor="password">
                  Forgot password ?
                </label>{' '}
              </div>{' '}
              <Field
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                name="password"
              />
              <p className="outer-input-password-wrong">
                <ErrorMessage name="password" />
              </p>
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
        </Form>
      </Formik>
    </div>
  )
}

export default Login
