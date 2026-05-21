export default function Sidebar() {
  return (
    <aside
      style={{
        width: 250,
        background: "#111827",
        color: "white",
        padding: 25,
      }}
    >
      <h2>AWS Dashboard</h2>
      <h4>LIST APP</h4>
      <div
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <span>📋 Tasks</span>
        <span>☁️ Serverless</span>
        <span>⚙️ Settings</span>
      </div>
    </aside>
  );
}