import { useState } from 'react';
import './Input.scss'
import { LuPlusCircle } from "react-icons/lu";

export default function Input(props) {
  const [value, setvalue] = useState('');

  function addHandler() {
    if (value.trim().length > 0) {
      props.handleAddTodo(value)
    }
  }
  return (
    <div className='component-input container'>
        <input value={value}
        onChange={(e) => setvalue(e.target.value)} 
        type="text" placeholder='Add your task here' 
        className="input" />
        <button  onClick={addHandler} className="btn">Create <LuPlusCircle /></button>
    </div>
  );
}

