import React, { createContext, useContext, useState } from 'react'
import Cookies  from "js-cookie"
 export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp")
  const [authUser, SetAuthUser ]=useState(initialUserState?JSON.parse(initialUserState):undefined)
  return (
    <AuthContext.Provider value ={[authUser,SetAuthUser]}>
      {children}
   </AuthContext.Provider>
  )
}

export const useAuth=() =>useContext(AuthContext) 
  

