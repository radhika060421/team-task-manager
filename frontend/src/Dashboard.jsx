
function Dashboard({ tasks }) {
  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Total Tasks: {tasks.length}</h3>

      {tasks.map((task, index) => (
        <p key={index}>
          {task.name} - {task.assigned}
        </p>
      ))}
    </div>
  );
}

export default Dashboard;