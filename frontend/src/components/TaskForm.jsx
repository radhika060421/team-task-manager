import { useState } from "react";

function TaskForm({ tasks, setTasks, setPage }) {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const addTask = () => {
    if (taskName === "" || assignedTo === "") {
      alert("Please Fill All Fields");
      return;
    }

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
        onChange={(e) =>
          setTaskName(e.target.value)
        }
      />

      <input
        placeholder="Assigned To"
        value={assignedTo}
        onChange={(e) =>
          setAssignedTo(e.target.value)
        }
      />

      <button onClick={addTask}>
        Create Task
      </button>

      <br /><br />

      <button
        className="switch-btn"
        onClick={() => setPage("dashboard")}
      >
        Show Previous Tasks
      </button>
    </div>
  );
}

export default TaskForm;