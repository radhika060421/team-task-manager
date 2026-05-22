import { useState } from "react";
import Login from "./Login";
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
      alert("Please Register First OR Wrong Details");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Team Task Manager</h1>

      {/* Navigation */}
      <button onClick={() => setPage("register")}>
        Register
      </button>

      <button onClick={() => setPage("login")}>
        Login
      </button>

      <button onClick={() => setPage("task")}>
        Task Manager
      </button>

      <button onClick={() => setPage("dashboard")}>
        Dashboard
      </button>

      <hr />

      {/* REGISTER PAGE */}
      {page === "register" && (
        <Register
          handleRegister={handleRegister}
        />
      )}

      {/* LOGIN PAGE */}
      {page === "login" && (
        <div>
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

          <br /><br />

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

          <br /><br />

          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      )}

      {/* TASK MANAGER */}
      {page === "task" && (
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
        />
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <Dashboard tasks={tasks} />
      )}
    </div>
  );
}

export default App;