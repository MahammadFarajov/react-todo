import { LuTrash2 } from "react-icons/lu";
import "./TaskContent.scss";
import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";

const TaskContent = (props) => {
  console.log(props.IsCompleted);
  return (
    <div>
      <div className="task">
        <div
          className={!props.IsCompleted ? "task-check" : "task-check completed"}
          onClick={() => props.handleComplete(props.id)}
        >
          <IoIosCheckmark color="#fff" />
        </div>
        <p className={!props.IsCompleted ? "text" : "text completed"}>
          {props.text}
        </p>
        <div className="icon" onClick={() => props.handleRemove(props.id)}>
          <LuTrash2 color="#808080" size={24} />
        </div>
      </div>
    </div>
  );
};

export default TaskContent;
