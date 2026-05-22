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

<h2>Previous Tasks</h2>

{(JSON.parse(
  localStorage.getItem(
    localStorage.getItem(
      "currentUser"
    ) + "_previous"
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