import { useEffect, useState } from "react";

import Layout from "./components/layout/Layout";
import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";
import EditTaskModal from "./components/modals/EditTaskModal";
import DeleteTaskModal from "./components/modals/DeleteTaskModal";

const API =
  "https://gugrqaeu4cz6gl7yxuztxcqphy0gcwck.lambda-url.us-east-1.on.aws/";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

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
      body: JSON.stringify({ title }),
    });

    setTitle("");
    loadTasks();
  }

  function deleteTask(task) {
    setTaskToDelete(task);
    setIsDeleteModalOpen(true);
  }

  async function confirmDelete() {
    await fetch(`${API}/tasks/${taskToDelete.id}`, {
      method: "DELETE",
    });

    setIsDeleteModalOpen(false);
    setTaskToDelete(null);

    loadTasks();
  }

  function editTask(task) {
    setSelectedTask(task);
    setEditTitle(task.title);
    setIsModalOpen(true);
  }

  async function saveTaskEdit() {
    if (!editTitle) return;

    await fetch(`${API}/tasks/${selectedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: editTitle,
        done: selectedTask.done,
      }),
    });

    setIsModalOpen(false);
    setSelectedTask(null);
    setEditTitle("");

    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <Layout>
        <TaskForm title={title} setTitle={setTitle} addTask={addTask} />

        <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      </Layout>

      <EditTaskModal
        isOpen={isModalOpen}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        saveTaskEdit={saveTaskEdit}
        closeModal={() => setIsModalOpen(false)}
      />

      <DeleteTaskModal
        isOpen={isDeleteModalOpen}
        confirmDelete={confirmDelete}
        closeModal={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
}
