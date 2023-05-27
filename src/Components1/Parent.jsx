import { useState } from "react";
import Child from "./Child";

function Parent()
{
    let [count, setcount]=useState(10);
    return(
        <div>
            <h1>parent component</h1>
            <h1>{count}</h1>

            <button onClick={()=>{setcount(count+10)}}>change count</button>
            <Child/>
        </div>
    )
}
export default Parent;
