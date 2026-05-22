import { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [tasks, setTasks] = useState([]);

  const createTask = () => {
    const newTask = {
      name: taskName,
      assigned: assignedTo
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setAssignedTo("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Team Task Manager</h1>

      <h2>Create Task</h2>

      <input
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Assigned To"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />

      <br /><br />

      <button onClick={createTask}>Create Task</button>

      <hr />

      <h2>Tasks</h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - {task.assigned}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;