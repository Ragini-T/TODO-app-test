import { useState } from "react";

export default function AxiosPost() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // add task
  const handleAdd = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
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
    updated[index] = newTask;
    setTasks(updated);
  };

  return (
    <div>
      <h2>TODO App</h2>

      {/* Input + Submit */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          style={{ padding: "5px", width: "200px" }}
        />

        <button
          onClick={handleAdd}
          style={{
            marginLeft: "10px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>

      {/* Task List */}
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
              borderRadius: "5px",
              width: "300px",
            }}
          >
            <span>{t}</span>

            <div>
              <button
                onClick={() => handleUpdate(i)}
                style={{
                  marginRight: "5px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                Update
              </button>

              <button
                onClick={() => handleDelete(i)}
                style={{
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
