import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
const ContextAuthProvider = ({ children }) => {
  const[token, setToken] = useState(null)
  const[user, setUser] = useState(null)

  const auth = {
    token,
    setToken,
    user, 
    setUser
  };

  const updateSessionStorageToken = (sessionToken)=> {
    sessionStorage.setItem('token', sessionToken)
  }

  useEffect(()=>{
    if(token){
        console.log(token)
        const payload = token.split('.')[1]
        const info = JSON.parse(atob(payload))
        console.log(info)
        setUser(info)
        updateSessionStorageToken(token)
    } else {
        if(sessionStorage.getItem('token')){
          setToken(sessionStorage.getItem('token'))
        } else {
          setUser(null)
        }
    }
}, [token])


  return (
    <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
   )
};

const useAuthContext = () => {
  const contextValue = useContext(AuthContext);
  return contextValue;
};

// eslint-disable-next-line react/prop-types
const AuthNoLoggedinRedirect = ({children})=>{
  const token = sessionStorage.getItem('token')
  console.log(token)
  if(!token){
  return <Navigate to='/log-in' />
 } else {
  return children
 }
}

// eslint-disable-next-line react/prop-types
const AuthLoggedinRedirect = ({children})=>{
  const token = sessionStorage.getItem('token')
  if(token){
  return <Navigate to='/' />
 } else {
  return children
 }
}

// eslint-disable-next-line react-refresh/only-export-components
export { ContextAuthProvider, useAuthContext, AuthNoLoggedinRedirect, AuthLoggedinRedirect }

