import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import UseState from './Components/UseState/UseState';

function App() {

  // const [name, setName] = useState('')
  // const renderCount = useRef(0)

  // useEffect (()=>{
  //   renderCount.current = renderCount.current + 1;
  // })
  // return (
  //   <>
  //   <input value={name} onChange={ e => setName(e.target.value)} />
  //   <div>My name is {name}</div>
  //   <p>I rendered {renderCount.current} times</p>
  //   </>
  // );

  const [count, setCount] = useState(0);

  return(
    <>
    <div>
      <p>You clicked {count} times</p>
      <button onClick = {()=> setCount(count + 1)}>Click Me</button>
    </div>
    <UseState/>
    </>
  );
}

export default App;
