import { useState } from "react";
import { ItemType } from "./types/itemType";
import Formulario from "./components/formulario/Formulario";
import Lista from "./components/lista/Lista";
import "./App.css";

function App() {
  const [listaItems, setListaItems] = useState<ItemType[]>([]);

  const adicionarNovoItem = (novoItem: ItemType) => {
    setListaItems((prev) => [...prev, novoItem]); //prev usa quando precisa do valor anterior
  };

  const removerItem = (id: string) => {
    setListaItems((prev) => prev.filter((item) => item.id !== id));
  };

  const concluirItem = (id: string) => {
    setListaItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.concluido = true;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <Formulario submit={(item: ItemType) => adicionarNovoItem(item)} />
      <Lista items={listaItems} deletar={removerItem} concluir={concluirItem} />
    </div>
  );
}

export default App;
