export default function EditTaskModal({
  isOpen,
  editTitle,
  setEditTitle,
  saveTaskEdit,
  closeModal,
}) {
  if (!isOpen) return null;

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
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 16,
          width: 400,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: 20 }}>
          Editar tarea
        </h2>

        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ccc",
            marginBottom: 20,
            fontSize: 16,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
          }}
        >
          <button onClick={closeModal}
          style={{...buttonStyle}}>
            Cancelar
          </button>

          <button onClick={saveTaskEdit}
          style={{...buttonStyle,
            background: "#0e9827",
              color: "white",
          }}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}