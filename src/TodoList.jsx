import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
       {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
