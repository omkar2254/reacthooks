//We use useMemo for optimization and better performance
//Once you call this store it in cache memory
import { useMemo, useState} from 'react'

function UseMemo(){
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    const multiplication = useMemo(function multiply(){
        return add * 10;
    }, [add])
    return (
        <>
        <h1>Learning UseMemo</h1>
        <br />
        {multiplication}
        <button onClick={()=> setAdd(add+1)}>Add</button>
        <span>{add}</span>
        <button onClick={()=> setMinus(minus-1)}>Minus</button>
        <span>{minus}</span>
        </>
    );
}

export default UseMemo;