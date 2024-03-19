import { useState } from "react";
import "./App.css";
import Formulario from "./components/formulario/Formulario";
import ListaAtividades from "./components/listaAtividades/ListaAtividades";

function App() {
  const [novaAtividade, setNovaAtividade] = useState("");
  const [listaAtividades, setListaAtividades] = useState<string[]>([]);

  const novaAtividadeHandler = () => {
    if (novaAtividade.trim().length === 0) return;

    setListaAtividades((prev) => [...prev, novaAtividade]);

    alert(`Atividade: ${novaAtividade} foi salva com sucesso!`);
    setNovaAtividade("");
  };

  return (
    <div className="App">
      <Formulario
        nomeAtividade={novaAtividade}
        atualizarNomeAtividade={setNovaAtividade}
        acaoSalvar={novaAtividadeHandler}
      />
      <ListaAtividades listaAtividades={listaAtividades} />
    </div>
  );
}

export default App;
