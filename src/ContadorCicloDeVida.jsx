import { useState, useEffect } from "react";

export default function ContadorCicloDeVida() {
  const [contador, setContador] = useState(0);

  /* useEffect(() => {
    console.log(
      "▶️ Efeito executado! Valor atual do contador:",
      contador
    );

    return () => {
      console.log(
        "🛑 Limpando o efeito anterior ou desmontando..."
      );
    };
  }, []); */

  /* useEffect(() => {
     console.log("▶️ Efeito executado!", contador);

    return () => {
     console.log("🛑 Limpando...");
    };
  }, [contador]); */

  useEffect(() => {
  console.log("▶️ Efeito executado!", contador);

  return () => {
    console.log("🛑 Limpando...");
  };
 });
   

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contador: {contador}</h2>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}