import React, { createContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
    const [user, setUser] = useState('JavasScript')
    return (
        <LoginContext.Provider value={
            {
                user,
                setUser: (data) => setUser(data)
            }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContextProvider, LoginContext } 