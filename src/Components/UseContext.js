//We use useContext hook to avoid props drilling
import { useState, createContext, useContext } from "react"
const UserContext = createContext();
function UseContext(){
    const [user, setUser] = useState('Omkar')
    return(
        <>
        <UserContext.Provider value={user}>
            <h1>`hello {user}`</h1>
            <Component2/>
        </UserContext.Provider>
        </>
    );
}

function Component2(){
    return(
        <>
        <h2>Component 2</h2>
        <Component3/>
        </>
    )
}

function Component3(){
    const user = useContext(UserContext)
    return(
        <>
        <h1>Component3</h1>
        <p>`hello {user}`</p>
        </>
    )
}

export default UseContext