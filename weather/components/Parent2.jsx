import React, { useContext, useEffect } from "react";
import { LoginContext } from "../LoginUserContext";

const Parent2 = (props) => {

    const {username, setUserTodata} = useContext(LoginContext); 
    
    return(
        <div>
            <h1>Parent2 {username}</h1>
            <button onClick={() => setUserTodata('React')}>Click Me</button>
            
        </div>
    )

}

export default Parent2