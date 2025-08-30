import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Toggle complete/incomplete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>My To-Do List</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
