import NumberChecker from "./NumberChecker";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1>Verificador de Números</h1>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <NumberChecker />
      </div>
    </div>
  );
}

export default App;
