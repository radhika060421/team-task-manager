import { useState } from "react";
import "./App.css";

import Register from "./Register";
import Dashboard from "./Dashboard";
import TaskForm from "./components/TaskForm";

function App() {
  const [page, setPage] = useState("register");

  const [registeredUser, setRegisteredUser] = useState(null);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [tasks, setTasks] = useState([]);

  // REGISTER
  const handleRegister = (name, email, password) => {
    setRegisteredUser({
      name,
      email,
      password,
    });

    alert("Registration Successful!");
    setPage("login");
  };

  // LOGIN
  const handleLogin = () => {
    if (
      registeredUser &&
      loginData.email === registeredUser.email &&
      loginData.password === registeredUser.password
    ) {
      alert("Login Successful!");
      setPage("task");
    } else {
      alert("Wrong Details OR Register First");
    }
  };

  return (
    <div className="container">
      <h1>Team Task Manager</h1>

      {/* REGISTER */}
      {page === "register" && (
        <div className="card">
          <Register handleRegister={handleRegister} />

          <br />

          <button
            className="switch-btn"
            onClick={() => setPage("login")}
          >
            Go To Login
          </button>
        </div>
      )}

      {/* LOGIN */}
      {page === "login" && (
        <div className="card">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value,
              })
            }
          />

          <button onClick={handleLogin}>
            Login
          </button>

          <br /><br />

          <button
            className="switch-btn"
            onClick={() => setPage("register")}
          >
            Back To Register
          </button>
        </div>
      )}

      {/* TASK MANAGER */}
      {page === "task" && (
        <div className="card">
          <TaskForm tasks={tasks} setTasks={setTasks} />

          <br />

          <button
            onClick={() => setPage("dashboard")}
          >
            Open Dashboard
          </button>
        </div>
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <div className="card">
          <Dashboard tasks={tasks}
          setPage={setPage} />

          <br />

          <button
            className="switch-btn"
            onClick={() => setPage("task")}
          >
            Back To Task Manager
          </button>
        </div>
      )}
    </div>
  );
}

export default App;