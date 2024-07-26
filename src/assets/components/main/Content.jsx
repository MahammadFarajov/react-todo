import { useState } from "react";
import Input from "./input/Input";
import Task from "./tasks/task";

const Content = () => {
  const [todos, setTodos] = useState([]);
  function addTodo(value) {
    setTodos((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 100),
        title: value,
        isCompleted: false,
      },
    ]);
  }
  function handleIsCompleted(id) {
    console.log(id);

    // setTodos((prevTodos) => {
    //   prevTodos.map((todo) => )
    // })
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  }
  function handleIsRemoveTodo(id) {
    console.log(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="components">
      <div className="input">
        <Input handleAddTodo={addTodo} />
        <Task
          handleRemove={handleIsRemoveTodo}
          handleComplete={handleIsCompleted}
          todos={todos}
        />
      </div>
    </div>
  );
};

export default Content;
