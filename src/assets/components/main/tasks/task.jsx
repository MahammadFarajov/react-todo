import "./task.scss";
import notebook from "../../../../images/Clipboard.png";
import TaskContent from "./TaskContent";

const task = ({ todos, handleComplete, handleRemove }) => {
  return (
    <div className="tasks container">
      <div className="tasks-top">
        <div className="current">
          <p>Current Tasks</p> <h4>0</h4>
        </div>
        <div className="completed">
          <p>Completed</p> <h4>0</h4>
        </div>
      </div>
      {todos.length > 0 ? (
        <div className="task-list">
          {todos.map((todo) => {
            return (
              <TaskContent
                handleRemove={(id) => handleRemove(id)}
                IsCompleted={todo.isCompleted}
                id={todo.id}
                handleComplete={(id) => handleComplete(id)}
                text={todo.title}
                key={todo.id}
              />
            );
          })}
        </div>
      ) : (
        <div className="todos-empty">
          <div className="text">
            {" "}
            <img src={notebook} alt="clipboard" />
            <p>
              The ToDo list is empty please add task to be done <br />
              Organized life with todo
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default task;
