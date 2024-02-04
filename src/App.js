import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect'
import UseContext from './Components/UseContext'
import UseRef from './Components/UseRef'
import UseMemo from './Components/UseMemo'
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
    {/* <UseState/>
    <UseEffect/>
    <UseContext/> */}
    <UseRef/>
    <UseMemo/>
    </>
  );
}

export default App;
