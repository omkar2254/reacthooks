import React, {useState} from 'react'
const UseState = () => {

   //Example One
   let [inputValue, changedValue] = useState("Omkar")
   let onChange = (event) =>{
      let newVal = event.target.value;
      changedValue(newVal);
   }

   //Example Two
   const [intialState, updatedState] = useState(0)
   const increment = () =>{
     updatedState(intialState + 1)
   }
   const decrement = () =>{
    updatedState(intialState - 1)
   }

   //Example three
   const[isToggled, setIsToggled] = useState(true);
   const toggle = () =>{
    setIsToggled(!isToggled)
   };

   //Example four
   const [todos, setTodos] = useState([]);

   const addTodo = () => {
    const newTodo = prompt('Enter a new todo:');
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  };
    return(
        <div>
            <h1>{inputValue}</h1>
            <input type="text" placeholder="type something" value={inputValue} onChange={onChange}/>

            {/* ----------------------------------------------------------------------------------------*/}

            <p>Count: {intialState}</p>
            <button onClick={decrement}>Click me to remove</button><button onClick={increment}>Click Me to add</button>

            {/*------------------------------------------------------------------------------------------*/}

            <p>The toggle state is: {isToggled ? 'ON' : 'OFF'}</p>
            <button onClick={toggle}>Toggle</button>

            {/*--------------------------------------------------------------------------------------------- */}

            <h3>Todo List</h3>
            <ol>
               {todos.map((todo, index) => (
               <li key={index}>{todo}</li>
               ))}
            </ol>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
};

export default UseState;