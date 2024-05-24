import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
    const [user, setUser] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(function (response) {
                console.log(response.data)
                setUser(response.data.name)
                // handle success
                // setWeahterInfo(response.data); /// weatherInfo = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

    return (
        <LoginContext.Provider value={
            {
                username: user,
                setUserTodata: (data) => setUser(data),
                // onlineUsers
            }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContextProvider, LoginContext } 