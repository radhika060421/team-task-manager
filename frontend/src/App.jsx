import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Team Task Manager</h1>

      {/* Navigation Buttons */}
      <button onClick={() => setPage("login")}>Login</button>

      <button onClick={() => setPage("register")}>
        Register
      </button>

      <button onClick={() => setPage("task")}>
        Task Manager
      </button>

      <button onClick={() => setPage("dashboard")}>
        Dashboard
      </button>

      <hr />

      {/* Pages */}
      {page === "login" && <Login />}

      {page === "register" && <Register />}

      {page === "task" && (
        <div>
          <h2>Create Task</h2>

          <input placeholder="Task Name" />
          <br /><br />

          <input placeholder="Assigned To" />
          <br /><br />

          <button>Create Task</button>

          <h2>Tasks</h2>

          <p>Login Page - Aarush</p>
          <p>Registration - Ansh</p>
        </div>
      )}

      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;