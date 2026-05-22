import { useState } from "react";
import "./App.css";

function App() {

  const [page, setPage] = useState("register");

  const [tasks, setTasks] = useState([]);

  const [showThankYou, setShowThankYou] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  // REGISTER
  const register = () => {

    const savedUsers =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const existingUser =
      savedUsers.find(
        (u) => u.email === email
      );

    if (existingUser) {

      alert("User already exists");
      return;

    }

    const newUsers = [
      ...savedUsers,
      { email, password }
    ];

    localStorage.setItem(
      "users",
      JSON.stringify(newUsers)
    );

    alert("Registered Successfully");

    setPage("login");
  };

  // LOGIN
  const login = () => {

    const savedUsers =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const user = savedUsers.find(
      (u) =>
        u.email === loginEmail &&
        u.password === loginPassword
    );

    if (user) {

      localStorage.setItem(
        "currentUser",
        loginEmail
      );

      alert("Login Successful");

      setPage("task");

    } else {

      alert("Wrong Email or Password");

    }
  };

  // SAVE TASK
  const createTask = () => {

    if (
      taskName === "" ||
      assignedTo === ""
    ) {

      alert("Fill all fields");
      return;

    }

    const currentUser =
      localStorage.getItem(
        "currentUser"
      );

    const oldCurrent =
      JSON.parse(
        localStorage.getItem(
          currentUser + "_current"
        )
      ) || [];

    const oldPrevious =
      JSON.parse(
        localStorage.getItem(
          currentUser + "_previous"
        )
      ) || [];

    // OLD current => previous
    if (oldCurrent.length > 0) {

      localStorage.setItem(
        currentUser + "_previous",
        JSON.stringify([
          ...oldPrevious,
          ...oldCurrent,
        ])
      );
    }

    // NEW current task
    const newCurrent = [
      {
        taskName,
        assignedTo,
      },
    ];

    localStorage.setItem(
      currentUser + "_current",
      JSON.stringify(newCurrent)
    );

    setTasks(newCurrent);

    setTaskName("");
    setAssignedTo("");

    alert("Task Saved");
  };

  // THANK YOU PAGE
  if (showThankYou) {

    return (
      <div className="app">

        <div className="box">

          <h1>
            Thank You 😄
          </h1>

        </div>

      </div>
    );
  }

  return (
    <div className="app">

      <h1>Team Task Manager</h1>

      {/* REGISTER */}
      {page === "register" && (
        <div className="box">

          <h2>Register</h2>

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
            Already have account?
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

          <p>
            New User?
          </p>

          <button
            onClick={() =>
              setPage("register")
            }
          >
            Register
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
            Save Task
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

    </div>
  );
}

export default App;