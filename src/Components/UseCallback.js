//UseCallback - The React useCallback Hook returns a memoized callback function
//This allows us to isolate resource intensive functions so that they will not automatically run on every render.
//The useCallback Hook only runs when one of its dependencies update.
import { useState, useCallback } from "react"
import Child from "./Child";
// function UseCallback(){
//     const[count, setCount] = useState(0)
//     const Learning = useCallback(()=>{
//         //some operation
//         console.log("Learning Complete")
//     },[])
//     return(
//         <>
//         <p>Count: {count}</p>
//         <Child Learning={Learning}/>
//         <button onClick={()=> setCount(count+1)}>Button</button>
//         </>
//     );
// }

// export default UseCallback;

function UseCallback(){
    const[count, setCount] = useState(0);
    const Learning = useCallback(()=>{
        //some operation
    }, [])
    return(
        <>
        <p>Count: {count}</p>
        <Child Learning={Learning}/>
        <button onClick={()=> setCount(count+1)}>Button</button>
        </>
    )
}
