import { useState } from 'react'
import Input from './input/Input'
import Task from './tasks/task'


const Content = () => {
  const [todos, settodos] = useState([{}])
  function addTodo(value){
    settodos((prevState) =>[
      ...prevState,
      {
        id: Math.floor(Math.random() * 10),
        title: value,
        isCompleted: false,
      },
    ]
    )
  }
  function handleIsCompleted(id) {
    settodos((prevTodos) => prevTodos.map((todo) => {
      todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo;
    }))
  }
  function handleIsRemoveTodo(id) {
    settodos((prevTodos) => prevTodos.filter((todo) => 
      todo.id !== id 
    ))
  }
  return (
    <div className='components'>
      <div className="input">
        <Input handleAddTodo={addTodo}/>
        <Task handleRemove={handleIsRemoveTodo} handleComplete={handleisCompleted} todos={todos}/>
      </div>
    </div>
  )
}

export default Content