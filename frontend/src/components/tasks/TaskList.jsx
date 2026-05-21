import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  editTask,
  deleteTask,
}) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}