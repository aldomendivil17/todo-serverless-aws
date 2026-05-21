export default function TaskForm({
  title,
  setTitle,
  addTask,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginBottom: 25,
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea..."
        style={{
          flex: 1,
          padding: 12,
          borderRadius: 10,
          border: "1px solid #ccc",
          fontSize: 16,
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: "12px 18px",
          border: "none",
          borderRadius: 10,
          background: "#2563eb",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Agregar
      </button>
    </div>
  );
}