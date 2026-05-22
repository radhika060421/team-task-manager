import { useState } from "react";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      name: taskName,
      assigned: assignedTo,
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setAssignedTo("");
  };

  return (
    <div>
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

      <button onClick={addTask}>
        Create Task
      </button>

      <h2>Tasks</h2>

      {tasks.map((task, index) => (
        <p key={index}>
          {task.name} - {task.assigned}
        </p>
      ))}
    </div>
  );
}

export default TaskForm;