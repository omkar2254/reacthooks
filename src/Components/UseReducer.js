//useReducer - same work as useState but used for complex state management and optimize performance
// import { useReducer } from 'react'
// const intialState = 0;
// const reducer = (state, action)=>{
//     switch(action){
//         case "Increment":
//             return state + 1;
//         case "Decrement":
//             return state - 1;
//         default:
//             return state;
//     }
// }
// function UseReducer(){
//     const [count, dispatch] = useReducer (reducer, intialState)
//     return(
//         <>
//         <div>Count: {count}</div>
//         <button onClick={()=>dispatch("Increment")}>Increment</button>
//         <button onClick={()=>dispatch("Decrement")}>Decrement</button>
//         </>
//     );
// }

// export default UseReducer;

import { useReducer } from 'react'
const intialState = 0;
const reducer = (state, action)=>{
    switch(action){
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        default:
            return state;
    }
}

function UseReducer(){
    const [count, dispatch] = useReducer(reducer, intialState)
    return(
        <>
        <div>Count: {count}</div>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        </>
    )
}

export default UseReducer;