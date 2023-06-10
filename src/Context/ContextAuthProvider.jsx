import React, { useContext, useState } from "react";
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
const AuthLoginRedirect = ({children})=>{
  const{token} = useAuthContext()
  if(!token){
  return <Navigate to='/log-in' />
 } else {
  return children
 }
}

// eslint-disable-next-line react-refresh/only-export-components
export { ContextAuthProvider, useAuthContext, AuthLoginRedirect }

