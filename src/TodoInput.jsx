import React, { useState } from "react";

function TodoInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px 12px", marginLeft: "5px" }}>Add</button>
    </form>
  );
}

export default TodoInput;
