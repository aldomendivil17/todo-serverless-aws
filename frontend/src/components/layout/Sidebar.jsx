import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside
      style={{
        width: 250,
        background: "#111827",
        color: "white",
        padding: 0,
      }}
    >
      <div
        style={{
          padding: 25,
        }}
      >
        <h2>AWS Dashboard</h2>
        <h4>LIST APP</h4>
      </div>
      <div
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <nav
          style={{
            gap: 15,
          }}
        >
          <Link to="/" className="sidebar-link">
            Dashboard
          </Link>

          <Link to="/tasks" className="sidebar-link">
            Tasks
          </Link>

          <Link to="/settings" className="sidebar-link">
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
}
