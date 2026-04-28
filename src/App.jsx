import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/Edit";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route
          path="/edit/:index"
          element={<Edit tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </Router>
  );
}
