//Here is this props drilling and to avoid this we are using useContext hook
import { useState, useEffect } from 'react'

function PropsDrilling(){
    const[user, setUser] = useState('Omkar');
    return(
        <>
        <h1>{`Hello ${user}`}</h1>
        <Component2 user={user}/>
        </>
    )
}

function Component2({user}){
    return(
        <>
        <h1>Component 2</h1>
        <Component3 user={user}/>
        </>
    )
}

function Component3({user}){
    return(
        <>
        <h1>Component 3</h1>
        <p>Hello {`${user}`}</p>
        </>
    )
}

export default PropsDrilling;

