import { useState } from "react";
import { ItemType } from "./types/itemType";
import Formulario from "./components/formulario/Formulario";
import Lista from "./components/lista/Lista";
import "./App.css";

function App() {
  const [listaItems, setListaItems] = useState<ItemType[]>([]);

  const adicionarNovoItem = (novoItem: ItemType) => {
    setListaItems((prev) => [...prev, novoItem]); //usa quando precisa do valor anterior
  };

  return (
    <div>
      <Formulario submit={(item: ItemType) => adicionarNovoItem(item)} />
      <Lista items={listaItems} />
    </div>
  );
}

export default App;
