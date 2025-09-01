import React from "react";

function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
