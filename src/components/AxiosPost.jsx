import { useState } from "react";

export default function AxiosPost() {
  const [task, setTask] = useState("");

  // now each task is an object: { text, color }
  const [tasks, setTasks] = useState([]);

  // add task
  const handleAdd = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, color: "black" }]);
    setTask("");
  };

  // delete task
  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // update task
  const handleUpdate = (index) => {
    const newTask = prompt("Enter updated task:");
    if (!newTask) return;

    const updated = [...tasks];
    updated[index].text = newTask;
    setTasks(updated);
  };

  // 🎨 change color
  const handleColorChange = (index) => {
    const colors = ["red", "blue", "green", "purple", "orange"];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const updated = [...tasks];
    updated[index].color = randomColor;
    setTasks(updated);
  };

  return (
    <div>
      <h2>TODO App</h2>

      {/* Input */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />

        <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </div>

      {/* List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "8px",
              width: "350px",
            }}
          >
            {/* colored text */}
            <span style={{ color: t.color }}>{t.text}</span>

            <div>
              <button onClick={() => handleUpdate(i)}>Update</button>

              <button
                onClick={() => handleDelete(i)}
                style={{ marginLeft: "5px" }}
              >
                Delete
              </button>

              {/* 🎨 Color Button */}
              <button
                onClick={() => handleColorChange(i)}
                style={{ marginLeft: "5px" }}
              >
                Color
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
