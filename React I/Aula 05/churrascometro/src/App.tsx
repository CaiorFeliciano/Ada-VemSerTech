import { useState } from "react";
import "./App.css";
import useChurrascometro from "./hooks/useChurrascometro.hooks";
import Contador from "./components/contador/Contador";
import Resultado from "./components/resultado/Resultado";

function App() {
  const [qtdHomem, setQtdHomem] = useState(0);
  const [qtdMulher, setQtdMulher] = useState(0);
  const [qtdCrianca, setQtdCrianca] = useState(0);
  /* CUSTOM HOOK */
  const { quantidadeCarneEmKg, quantidadePaoDeAlhoUN } = useChurrascometro({
    qtdHomem,
    qtdMulher,
    qtdCrianca,
  });

  return (
    <>
      <div className="ListaCard">
        <Contador
          titulo="Homem"
          quantidade={qtdHomem}
          setQuantidade={setQtdHomem}
        />
        <Contador
          titulo="Mulher"
          quantidade={qtdMulher}
          setQuantidade={setQtdMulher}
        />
        <Contador
          titulo="Crianca"
          quantidade={qtdCrianca}
          setQuantidade={setQtdCrianca}
        />
      </div>
      <Resultado
        quantidadeCarne={quantidadeCarneEmKg}
        quantidadePaoDeAlho={quantidadePaoDeAlhoUN}
      />
    </>
  );
}

export default App;

// PAREI 1:14:50
