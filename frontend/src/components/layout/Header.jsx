export default function Header() {
  return (
    <header
      style={{
        background: "white",
        padding: 20,
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <h1
        style={{
          color: "#182c4b",
          fontSize: 45,
          textAlign: "left",
          paddingLeft:12,
        }}
      >
        Serverless Task Dashboard
      </h1>
    </header>
  );
}
