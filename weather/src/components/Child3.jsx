import React, { useContext } from "react";
import  {LoginContext, LoginContextProvider } from "../LoginUserContext";

const Child3 = (props) => {
   const user = useContext(LoginContext);

   console.log(user);

    return(
        <div>
            <h1>Child3 {user.user}</h1>
        </div>
    )

}

export default Child3