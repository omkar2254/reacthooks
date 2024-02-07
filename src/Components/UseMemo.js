//We use useMemo for optimization and better performance
//Once you call this store it in cache memory
//The useMemo Hook only runs when one of its dependencies update.
//This can improve performance.

// import { useMemo, useState} from 'react'

// function UseMemo(){
//     const [add, setAdd] = useState(0);
//     const [minus, setMinus] = useState(100);

//     const multiplication = useMemo(function multiply(){
//         return add * 10;
//     }, [add])
//     return (
//         <>
//         <h1>Learning UseMemo</h1>
//         <br />
//         {multiplication}
//         <button onClick={()=> setAdd(add+1)}>Add</button>
//         <span>{add}</span>
//         <button onClick={()=> setMinus(minus-1)}>Minus</button>
//         <span>{minus}</span>
//         </>
//     );
// }

// export default UseMemo;

import { useState, useMemo } from 'react'

function UseMemo(){
    const [count, setCount] = useState(0)

    const multi = useMemo(()=>{
        return count * 2;
    }, [count])
    return(
        <>
        <p>UseMemo: {multi}</p>
        <button onClick={()=>setCount(count+1)}>Click</button>
        <p>Count: {count}</p>
        </>
    );
}

export default UseMemo;