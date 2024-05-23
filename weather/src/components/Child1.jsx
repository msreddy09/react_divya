import React from "react";
import Child2 from "./Child2";

const Child1 = (props) => {


    return(
        <div>
            <h1>Child1</h1>
            <Child2 user={props.user}/>
        </div>
    )

}

export default Child1