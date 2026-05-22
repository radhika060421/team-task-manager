import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("register");
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [taskData, setTaskData] = useState({
    name: "",
    assignedTo: "",
  });

  // REGISTER
  const handleRegister = () => {
    const userExists = users.find(
      (u) => u.email === registerData.email
    );

    if (userExists) {
      alert("User already exists!");
      return;
    }

    setUsers([...users, registerData]);

    alert("Registration Successful!");

    setRegisterData({
      name: "",
      email: "",
      password: "",
    });

    setPage("login");
  };

  // LOGIN
  const handleLogin = () => {
    const validUser = users.find(
      (u) =>
        u.email === loginData.email &&
        u.password === loginData.password
    );

    if (validUser) {
      alert("Login Successful!");
      setPage("task");
    } else {
      alert("Invalid Email or Password");
    }
  };

  // CREATE TASK
  const createTask = () => {
    if (
      taskData.name === "" ||
      taskData.assignedTo === ""
    ) {
      alert("Fill all fields");
      return;
    }

    setTasks([...tasks, taskData]);

    setTaskData({
      name: "",
      assignedTo: "",
    });

    alert("Task Created!");
  };

  return (
    <div className="app">

      <h1 className="title">
        Team Task Manager
      </h1>

      {/* REGISTER */}
      {page === "register" && (
        <div className="box">

          <h2>Register</h2>

          <input
            type="text"
            placeholder="Name"
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                password: e.target.value,
              })
            }
          />

          <button onClick={handleRegister}>
            Register
          </button>

          <p>
            Already have account?
          </p>

          <button
            onClick={() => setPage("login")}
          >
            Go To Login
          </button>

        </div>
      )}

      {/* LOGIN */}
      {page === "login" && (
        <div className="box">

          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
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
            value={loginData.password}
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

          <p>
            New user?
          </p>

          <button
            onClick={() => setPage("register")}
          >
            Go To Register
          </button>

        </div>
      )}

      {/* TASK MANAGER */}
      {page === "task" && (
        <div className="box">

          <h2>Create Task</h2>

          <input
            type="text"
            placeholder="Task Name"
            value={taskData.name}
            onChange={(e) =>
              setTaskData({
                ...taskData,
                name: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Assigned To"
            value={taskData.assignedTo}
            onChange={(e) =>
              setTaskData({
                ...taskData,
                assignedTo: e.target.value,
              })
            }
          />

          <button onClick={createTask}>
            Create Task
          </button>

          <button
            onClick={() => setPage("dashboard")}
          >
            Open Dashboard
          </button>

        </div>
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <div className="box">

          <h2>Dashboard</h2>

          <h3>
            Total Tasks : {tasks.length}
          </h3>

          {tasks.map((task, index) => (
            <div
              className="task"
              key={index}
            >
              <p>
                <b>Task:</b> {task.name}
              </p>

              <p>
                <b>Assigned To:</b>{" "}
                {task.assignedTo}
              </p>
            </div>
          ))}

          <button
            onClick={() => setPage("task")}
          >
            Go To Task Manager
          </button>

          <button
            style={{
              background: "red",
            }}
          >
            Finish Project
          </button>

        </div>
      )}
    </div>
  );
}

export default App;