//We use useRef hook to manipulate dom
//Allows you to persist values between renders 
//It can be used to store a mutable values that does not cause a re-render when updated
//Used to access dom elements directly
import { useState, useRef, useEffect } from 'react';
function UseRef(){
    // const refElement = useRef("");
    // console.log(refElement);

    // const [name, setName] = useState("Omkar");
    // const reset = ()=>{
    //     setName("");
    //     refElement.current.focus();
    // }
    // const verifylink = ()=>{
    //     refElement.current.style.color="blue";
    // }
    // return(
    //     <>
    //     <h1>Learning useRef Hook!</h1>
    //     <input ref={refElement} type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    //     <button onClick={reset}>Reset</button>
    //     <button onClick={verifylink}>Verify Link</button>
    //     </>
    // );

    const count = useRef(0);
    const [input, setInput] = useState(0)

   useEffect(()=>{
    count.current = count.current + 1;
   })

   function renderPage(){
    setInput(input+1);
   }

    return(
        <>
        <button onClick={renderPage}>{input}</button>
        <p>Page rendered {count.current} times</p>
        </>
    )
}

export default UseRef;