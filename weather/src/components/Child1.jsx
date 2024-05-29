import React from "react";
import Child2 from "./Child2";

const Child1 = (props) => {

    return(
        <div>
            <h1>Child1</h1>
            {console.log('child1')}
            <Child2 />
        </div>
    )

}

export default React.memo(Child1)