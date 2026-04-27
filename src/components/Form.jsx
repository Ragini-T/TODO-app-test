import axios from "axios";
import { useState, useEffect } from "react";
export default function Form() {

  const [task, settask] = useState("")
  const [tasks, settasks] = useState([])

  // preventDefault() stops the default behavior of an HTML element.
  // Default behavior = the action the browser normally performs.
  // example: in forms when we submit it reloads the page
  // but here we are not submitting a form so we don't need preventDefault()

  const onTaskChange = (e) => {
    // onchange- runs function every time user types something
    settask(e.target.value)
  }

  const onTaskAdd = () => {
    if (task.trim() === "") return //prevents empty task if input empty chills
    axios.post("https://jsonplaceholder.typicode.com/todos")
    // ... is spread operator
    // takes all the elements from array and spreads into a new array
    // we use it because state should not be modified directly

    // tasks = existing tasks stored in array
    // task = new task added by user
    settasks([...tasks, task])

    // after giving input clear the input box
    settask("")
  }

  const onTaskDelete = (index) => {

    // filter() creates a new array removing the selected task
    const newTasks = tasks.filter((_, i) => i !== index)
    settasks(newTasks)

  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>

      <h2 className="text-center mb-4">TODO App</h2>

      <div className="mb-3">

        <label htmlFor="Todoinput" className="form-label">
          Add a TODO
        </label>

        <div className="input-group mb-3">

          <input
            onChange={onTaskChange}
            value={task}
            type="text"
            className="form-control mx-3"
            placeholder="enter your todo"
          />

          <button
            onClick={() => onTaskAdd(task)}
            className="btn btn-primary"
          >
            add
          </button>

        </div>

        <ul className="list-group">

          {
            // map() - loops through each item in an array
            // tasks exists so map() runs and displays each task

            tasks.map((task, i) => (

              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >

                {task}

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onTaskDelete(i)}
                >
                  Delete
                </button>

              </li>

            ))
          }

        </ul>

      </div>

    </div>
  )
}