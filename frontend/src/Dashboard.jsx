import { useState } from "react";

function Dashboard({ tasks, setPage }) {
  const [showTasks, setShowTasks] = useState(false);

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Total Tasks: {tasks.length}</h3>

      {/* BUTTONS */}
      <button
        className="switch-btn"
        onClick={() => setPage("task")}
      >
        Go To Task Manager
      </button>

      <br /><br />

      <button
        onClick={() => setShowTasks(!showTasks)}
      >
        Show Previous Tasks
      </button>

      <br /><br />

      {/* TASKS */}
      {showTasks && (
        <div>
          {tasks.length === 0 ? (
            <p>No Previous Tasks</p>
          ) : (
            tasks.map((task, index) => (
              <div
                className="task-item"
                key={index}
              >
                <h4>{task.name}</h4>

                <p>
                  Assigned To :
                  <b> {task.assigned}</b>
                </p>
              </div>
            ))
          )}
        </div>
      )}

      <br />

      <button
        style={{
          background: "red",
          color: "white",
        }}
      >
        Finish Project ✅
      </button>
    </div>
  );
}

export default Dashboard;