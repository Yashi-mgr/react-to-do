import React from "react";

function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <li style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      marginBottom: "10px", 
      textDecoration: task.completed ? "line-through" : "none" 
    }}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => toggleTask(task.id)} style={{ marginRight: "5px" }}>✔</button>
        <button onClick={() => deleteTask(task.id)}>❌</button>
      </div>
    </li>
  );
}

export default TodoItem;
