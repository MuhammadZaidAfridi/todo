import React, { useState } from 'react'
// import './App.css'
import Input from './Components/Input'
import Box from './Components/Box'
// import Items from './Components/Items'

function App() {
  let [todos, setTodos] = useState([])

  const removeTodo = (id) => {
    const newTodos = todos.filter(
      (d, index) => {
        if (index !== id) {
          return true;
        }
        else {
          return false;
        }
      }
    )
    setTodos(newTodos) ;
  }


  const addTodoHandler = (item) => {
    // console.log(data)
    setTodos(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
    // console.log(todos)
  }
  return (
    <>
      <div className='h-screen w-screen bg-black p-14'>
        <div className='w-[700px] h-[600px] bg-white mx-auto shadow-3xl rounded-md text-black '>
          <Input handler={addTodoHandler} />
          <Box data={todos} removeHandler={removeTodo} />
        </div>
      </div>
    </>
  )
}

export default App
