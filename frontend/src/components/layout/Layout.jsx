import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <main style={{ padding: 30 }}>
          {children}
        </main>
      </div>
    </div>
  );
}