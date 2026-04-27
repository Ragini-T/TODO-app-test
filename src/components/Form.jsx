import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // handle input change
  const onTaskChange = (e) => {
    setTask(e.target.value);
  };

  // add task
  const onTaskAdd = async () => {
    if (task.trim() === "") return;

    try {
      // fake API call
      await axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: task,
        completed: false,
      });

      // update UI
      setTasks([...tasks, task]);
      setTask("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // delete task
  const onTaskDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">TODO App</h2>

      <div className="mb-3">
        <label className="form-label">Add a TODO</label>

        <div className="input-group mb-3">
          <input
            type="text"
            value={task}
            onChange={onTaskChange}
            className="form-control"
            placeholder="Enter your todo"
          />

          <button
            type="button"
            onClick={onTaskAdd}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>

        <ul className="list-group">
          {tasks.map((task, i) => (
            <li
              key={i}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task}

              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => onTaskDelete(i)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}