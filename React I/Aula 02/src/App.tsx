import "./App.css";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
      <Contador
        tituloContador="Homens"
        gramasPorPessoa={400}
        paoDeAlhoPorPessoa={2}
        carvaoPorPessoa={1}
        salPorPessoa={40}
        refrigerantePorPessoa={400}
        aguaPorPessoa={200}
        farofaPorPessoa={200}
      />
      <Contador
        tituloContador="Mulheres"
        gramasPorPessoa={300}
        paoDeAlhoPorPessoa={1}
        carvaoPorPessoa={1}
        salPorPessoa={20}
        refrigerantePorPessoa={400}
        aguaPorPessoa={200}
        farofaPorPessoa={200}
      />
      <Contador
        tituloContador="Crianças"
        gramasPorPessoa={100}
        paoDeAlhoPorPessoa={1}
        carvaoPorPessoa={1}
        salPorPessoa={10}
        refrigerantePorPessoa={100}
        aguaPorPessoa={200}
        farofaPorPessoa={50}
      />
    </div>
  );
}

export default App;
