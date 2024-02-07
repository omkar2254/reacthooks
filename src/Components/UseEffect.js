import { useState, useEffect } from "react"

const UseEffect = ()=>{
   let [counter, setCounter] = useState(6)
   let increment = ()=>{
    setCounter(counter + 1);
   }
   let decrement = ()=>{
    setCounter(counter - 1);
   }
   useEffect(() => {
    // This will run every time the component renders
    document.getElementById('counterParagraph').innerHTML = `Counter: ${counter}`;
  })
    return(
        <>
        <button onClick={increment}>Increment {counter}</button>
        <button onClick={decrement}>Decrement {counter}</button>
        <p id="counterParagraph"></p>
        </>
    );
};

export default UseEffect;