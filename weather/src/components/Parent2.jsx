import React, { useContext, useEffect } from "react";
import { LoginContext } from "../LoginUserContext";

const Parent2 = (props) => {

    const user = useContext(LoginContext);
    
    return(
        <div>
            <h1>Parent2 {user.user}</h1>
            <button onClick={() => user.setUser('React')}>Click Me</button>
            
        </div>
    )

}

export default Parent2