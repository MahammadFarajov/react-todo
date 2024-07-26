import { LuTrash2 } from 'react-icons/lu'
import './TaskContent.scss'
import React, { useState } from 'react';
import { IoIosCheckmark } from 'react-icons/io';

const TaskContent = (props) => {
  const [IsCompleted, setIsCompleted] = useState(false);
  return (
    <div>
        <div className="task">
            <div className={!props.IsCompleted ? "task-check" : "task-check completed"}
                onClick={props.handleComplete(props.id)}><IoIosCheckmark color='#fff'/></div>
            <p onClick={() => props.handleRemove(props.id)}  className={!props.IsCompleted ? "text" : "text completed"}>{props.text}</p>
            <div className="icon"><LuTrash2 color='#808080' size={24}/></div>
        </div>
    </div>
  )
}

export default TaskContent