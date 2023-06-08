import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
const ContextAuthProvider = ({ children }) => {
    const[user, setUser] = useState(null)
  const auth = {
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

// eslint-disable-next-line react-refresh/only-export-components
export { ContextAuthProvider, useAuthContext }

