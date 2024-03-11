import "./App.css";
import Header from "./components/header/Header";
import ListaManchete from "./components/listaManchete/LIstaManchete";
import ListaTexto from "./components/listaTexto/ListaTexto";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="main">
        <ListaTexto />
        <ListaManchete />
        <ListaTexto />
      </div>
    </div>
  );
}

export default App;
