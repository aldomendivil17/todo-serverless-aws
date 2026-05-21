export default function TaskItem({
  task,
  editTask,
  deleteTask,
}) 
{
  const buttonStyle = {
    padding: "10px 16px",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "",
  };
  return (
    <div
      style={{
        background: "white",
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <span>{task.title}</span>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => editTask(task)}
          style={{...buttonStyle,
            background:"#f4bd1a"
          }}
        >
          Editar
        </button>

        <button
          onClick={() => deleteTask(task)}
          style={{...buttonStyle,
            background: "#ef4444",
            color: "white"
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}