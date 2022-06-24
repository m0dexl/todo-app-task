import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import "./general.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  const addTodo = (todo) => {
    if (
      todo.input === "" ||
      todo.status === "" ||
      todo.date === new Date(todos.date).toString("gg.aa.yyyy")
    ) {
      return;
    }
    setTodos([todo, ...todos]);
  };

  const updateTodo = (id, newValue) => {
    if (newValue.input === "") {
      return;
    }
    setTodos((todo) => todo.map((item) => (item.id === id ? newValue : item)));
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completedTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const applyFilter = (e) => {
    if (e === "Hepsi") setFilter("");
    else setFilter(e);
  };

  return (
    <div className="todo-app">
      <h1>Yapılacaklar Listesi</h1>
      <TodoForm onSubmit={addTodo} items={todos} applyFilter={applyFilter} />
      <Todo
        todos={todos.filter((e) => e.status.includes(filter))}
        completedTodo={completedTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default TodoList;
