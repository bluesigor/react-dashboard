import { createContext, useContext } from 'react'

const UsersContext = createContext()
export const UsersContextProvider = ({ chidlren }) => {
  return <UsersContext.Provider value={{}}> </UsersContext.Provider>
}

export const useUsersContext = () => {
  return useContext(UsersContext)
}
