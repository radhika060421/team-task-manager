import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Login />
      <hr />

      <Register />
      <hr />

      <Dashboard />
      <hr />

      <h1>Team Task Manager</h1>

      <input placeholder="Task Name" />
      <br /><br />

      <input placeholder="Assigned To" />
      <br /><br />

      <button>Create Task</button>

      <h2>Tasks</h2>

      <p>Login Page - Aarush</p>
      <p>Registration - Ansh</p>
    </div>
  );
}

export default App;