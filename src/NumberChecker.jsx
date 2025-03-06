import { useState } from "react";

function NumberChecker() {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");

    const checkNumber = () => {
        const num = parseFloat(number);
        if (isNaN(num)) {
        setResult("Por favor, ingresa un número válido.");
        } else if (num > 0) {
        setResult("El número es positivo.");
        } else if (num < 0) {
        setResult("El número es negativo.");
        } else {
        setResult("El número es cero.");
        }
    };

    return (
        <div>
        <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Ingresa un número"
        />
        <button onClick={checkNumber}>Verificar</button>
        <p>{result}</p>
        </div>
    );
}

export default NumberChecker;
