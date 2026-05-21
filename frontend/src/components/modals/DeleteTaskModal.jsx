export default function DeleteTaskModal({ isOpen, confirmDelete, closeModal }) {
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
        <h2 style={{ marginBottom: 15 }}>Confirmar eliminación</h2>

        <p style={{ marginBottom: 25 }}>
          ¿Seguro que deseas eliminar esta tarea?
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
          }}
        >
          <button onClick={closeModal}
          style={{...buttonStyle}}>Cancelar</button>

          <button
            onClick={confirmDelete}
            style={{
                ...buttonStyle,
              background: "#ef4444",
              color: "white",
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
