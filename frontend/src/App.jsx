import { useState } from "react";
import "./App.css";

function App() {

  const [page, setPage] = useState("register");

  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  // REGISTER
  const register = () => {

    const existingUser = users.find(
      (u) => u.email === email
    );

    if (existingUser) {
      alert("User already exists");
      return;
    }

    setUsers([
      ...users,
      { email, password }
    ]);

    alert("Registered Successfully");

    setPage("login");
  };

  // LOGIN
  const login = () => {

    const user = users.find(
      (u) =>
        u.email === loginEmail &&
        u.password === loginPassword
    );

    if (user) {

      alert("Login Successful");

      // LOGIN PACHI DIRECT TASK PAGE
      setPage("task");

    } else {

      alert("Wrong Email or Password");

    }
  };

  // CREATE TASK
  const createTask = () => {

    if (
      taskName === "" ||
      assignedTo === ""
    ) {
      alert("Fill all fields");
      return;
    }

    setTasks([
      ...tasks,
      {
        taskName,
        assignedTo,
      },
    ]);

    setTaskName("");
    setAssignedTo("");

    alert("Task Created");
  };

  return (
    <div className="app">

      <h1>Team Task Manager</h1>

      {/* REGISTER */}
      {page === "register" && (
        <div className="box">

          <h2>Register</h2>

          <input
            placeholder="Name"
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button onClick={register}>
            Register
          </button>

          <p>
            Do you have account?
          </p>

          <button
            onClick={() =>
              setPage("login")
            }
          >
            Login
          </button>

        </div>
      )}

      {/* LOGIN */}
      {page === "login" && (
        <div className="box">

          <h2>Login</h2>

          <input
            placeholder="Email"
            onChange={(e) =>
              setLoginEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginPassword(e.target.value)
            }
          />

          <button onClick={login}>
            Login
          </button>

        </div>
      )}

      {/* TASK */}
      {page === "task" && (
        <div className="box">

          <h2>Create Task</h2>

          <input
            placeholder="Task Name"
            value={taskName}
            onChange={(e) =>
              setTaskName(e.target.value)
            }
          />

          <input
            placeholder="Assigned To"
            value={assignedTo}
            onChange={(e) =>
              setAssignedTo(e.target.value)
            }
          />

          <button onClick={createTask}>
            Create Task
          </button>

          <button
            onClick={() =>
              setPage("dashboard")
            }
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
            Total Tasks :
            {tasks.length}
          </h3>

          {tasks.map((task, index) => (

            <div
              key={index}
              className="task"
            >

              <p>
                <b>
                  {task.taskName}
                </b>
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
              alert("Thank You 😄")
            }
          >
            Finish Project
          </button>

        </div>
      )}

    </div>
  );
}

export default App;