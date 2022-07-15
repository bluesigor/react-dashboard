import React from 'react'
import Login from '../../pages/Login/Login'
import Sidebar from '../Sidebar/Sidebar'
import Overview from '../../pages/Overview/Overview'
import Tickets from '../../pages/Tickets/Tickets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'
const Authorized = () => {
  const { isLoggedIn } = useContext(LoginContext)
  return (
    <>
      <BrowserRouter>
        {' '}
        {isLoggedIn ? (
          <Routes>
            <Route path="/login" element={<Login />} />{' '}
            <Route
              path="/*"
              element={
                <>
                  <Sidebar /> <Overview />
                </>
              }
            />{' '}
            <Route
              path="/tickets"
              element={
                <>
                  <Sidebar />
                  <Tickets />
                </>
              }
            />{' '}
          </Routes>
        ) : (
          <Login />
        )}{' '}
      </BrowserRouter>{' '}
    </>
  )
}

export default Authorized
