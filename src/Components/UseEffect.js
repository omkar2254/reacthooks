import { useState, useEffect } from "react"

const UseEffect = ()=>{
   let [counter, setCounter] = useState(6)
   let increment = ()=>{
    setCounter(counter + 1);
   }
   let decrement = ()=>{
    setCounter(counter - 1);
   }
   useEffect(()=>{
    console.log("Omkar Patil")
   })
    return(
        <>
        <button onClick={increment}>Increment {counter}</button>
        <button onClick={decrement}>Decrement {counter}</button>
        </>
    );
};

export default UseEffect;