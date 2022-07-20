import { createContext, useContext, useState } from 'react'
import * as Yup from 'yup'

export const LoginContext = createContext()

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => {
    setShowPassword((prev) => !prev)
  }
  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  })
  const onSubmit = (values) => {
    if (values.email === 'jones@gmail.com' && values.password === 'jones111') {
      setIsLoggedIn(true)
    }
    values.email = ''
    values.password = ''
  }
  return (
    <LoginContext.Provider
      value={{
        onSubmit,
        validationSchema,
        initialValues,
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
