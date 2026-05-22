import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import TaskForm from "./components/TaskForm";

function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Team Task Manager</h1>

      {/* Navigation Buttons */}
      <button onClick={() => setPage("login")}>
        Login
      </button>

      <button onClick={() => setPage("register")}>
        Register
      </button>

      {isLoggedIn && (
        <>
          <button onClick={() => setPage("task")}>
            Task Manager
          </button>

          <button onClick={() => setPage("dashboard")}>
            Dashboard
          </button>
        </>
      )}

      <hr />

      {/* LOGIN PAGE */}
      {page === "login" && (
        <div>
          <Login />

          <br />

          <button
            onClick={() => {
              setIsLoggedIn(true);
              setPage("task");
            }}
          >
            Enter App
          </button>
        </div>
      )}

      {/* REGISTER PAGE */}
      {page === "register" && (
        <div>
          <Register />

          <br />

          <button
            onClick={() => {
              setIsLoggedIn(true);
              setPage("task");
            }}
          >
            Register & Continue
          </button>
        </div>
      )}

      {/* TASK MANAGER */}
      {page === "task" && isLoggedIn && (
        <TaskForm />
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && isLoggedIn && (
        <Dashboard />
      )}
    </div>
  );
}

export default App;