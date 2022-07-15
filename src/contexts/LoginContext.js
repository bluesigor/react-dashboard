import { useFormik } from 'formik'
import { createContext, useContext, useState } from 'react'

export const LoginContext = createContext()

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const initialValues = {
    email: '',
    password: '',
  }
  const validate = (values) => {
    let errors = {}
    if (!values.password) {
      errors.password = 'Required'
    }
    if (!values.email) {
      errors.email = 'Requiered'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email'
    }
    return errors
  }
  const onSubmit = (values) => {
    if (values.email === 'jones@gmail.com' && values.password === 'jones111') {
      setIsLoggedIn(true)
    }
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })
  const togglePassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <LoginContext.Provider
      value={{
        formik,
        isLoggedIn,
        setIsLoggedIn,
        showPassword,
        togglePassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
export const useLoginContext = () => {
  return useContext(LoginContext)
}
