import NumberChecker from "./NumberChecker";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw", // El ancho de la pantalla
        textAlign: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          minWidth: "300px", // Para que no se vea tan comprimido en móviles
        }}
      >
        <h1>Verificador de Números</h1>
        <NumberChecker />
      </div>
    </div>
  );
}

export default App;
