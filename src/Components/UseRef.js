//We use useRef hook to manipulate dom
import { useState, useRef } from 'react';
function UseRef(){
    const refElement = useRef("");
    console.log(refElement);

    const [name, setName] = useState("Omkar");
    const reset = ()=>{
        setName("");
        refElement.current.focus();
    }
    const verifylink = ()=>{
        refElement.current.style.color="blue";
    }
    return(
        <>
        <h1>Learning useRef Hook!</h1>
        <input ref={refElement} type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        <button onClick={reset}>Reset</button>
        <button onClick={verifylink}>Verify Link</button>
        </>
    );
}

export default UseRef;