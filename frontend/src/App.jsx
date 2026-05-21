import { useEffect, useState } from "react";

const API = "https://gugrqaeu4cz6gl7yxuztxcqphy0gcwck.lambda-url.us-east-1.on.aws/";

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  async function loadTasks() {

    const res = await fetch(`${API}/tasks`);

    const data = await res.json();

    setTasks(data);
  }

  async function addTask() {

    if (!title) return;

    await fetch(`${API}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });

    setTitle("");

    loadTasks();
  }

  async function deleteTask(id) {

    await fetch(`${API}/tasks/${id}`, {
      method: "DELETE",
    });

    loadTasks();
  }

  async function editTask(task) {

    const newTitle = prompt(
      "Editar tarea:",
      task.title
    );

    if (!newTitle) return;

    await fetch(`${API}/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
        done: task.done
      }),
    });

    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div style={{ padding: 20 }}>

      <h1>ToDo Serverless Application on AWS</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea"
      />

      <button onClick={addTask}>
        Agregar
      </button>

      <hr />

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            marginBottom: 10
          }}
        >

          {task.title}

          <button
            onClick={() => editTask(task)}
            style={{
              marginLeft: 10
            }}
          >
            Editar
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            style={{
              marginLeft: 10
            }}
          >
            Eliminar
          </button>

        </div>
      ))}

    </div>
  );
}