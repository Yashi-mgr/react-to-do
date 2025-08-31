import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
