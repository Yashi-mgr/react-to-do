import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("Sunday");
  const [tasks, setTasks] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks((prev) => ({
      ...prev,
      [day]: [...prev[day], task],
    }));
    setTask("");
  };

  return (
    <div className="app">
      <h1 className="title">Weekly Task Planner</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />
        <select value={day} onChange={(e) => setDay(e.target.value)} className="day-select">
          {Object.keys(tasks).map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <button onClick={handleAddTask} className="add-btn">Add</button>
      </div>

      <div className="week-grid">
        {Object.entries(tasks).map(([day, dayTasks]) => (
          <div key={day} className="day-column">
            <h2>{day}</h2>
            <ul>
              {dayTasks.map((t, i) => (
                <li key={i} className="task">{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
