{/* DASHBOARD */}
{page === "dashboard" && (
  <div className="box">

    <h2>Dashboard</h2>

    <button
      onClick={() =>
        setPage("previous")
      }
    >
      Previous Tasks
    </button>

    <h2>Current Tasks</h2>

    {(JSON.parse(
      localStorage.getItem(
        localStorage.getItem(
          "currentUser"
        ) + "_current"
      )
    ) || []).map((task, index) => (

      <div
        key={index}
        className="task"
      >

        <p>
          <b>{task.taskName}</b>
        </p>

        <p>
          Assigned To :
          {task.assignedTo}
        </p>

      </div>

    ))}

    <button
      onClick={() =>
        setPage("task")
      }
    >
      Go To Task Manager
    </button>

    <button
      style={{
        background: "red",
      }}
      onClick={() =>
        setShowThankYou(true)
      }
    >
      Finish Project
    </button>

  </div>
)}