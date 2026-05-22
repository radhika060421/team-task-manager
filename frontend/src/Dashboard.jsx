function Dashboard({ tasks, setPage }) {
  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Total Tasks: {tasks.length}</h3>

      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <h4>{task.name}</h4>

            <p>
              Assigned To :
              <b> {task.assigned}</b>
            </p>
          </div>
        ))
      )}

      <br />

      <button
        className="switch-btn"
        onClick={() => setPage("task")}
      >
        Back To Task Manager
      </button>

      <br /><br />

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