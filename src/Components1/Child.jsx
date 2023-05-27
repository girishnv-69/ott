import { memo } from "react";


function Child()
{
    console.log("child rendered");
    return(
        <div>
            <h1>child comp</h1>
        </div>
    )
}
export default memo(Child);