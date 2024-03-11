import { useState } from "react";
import "./Contador.css";

type ContadorProps = {
  tituloContador: string;
  gramasPorPessoa: number;
  paoDeAlhoPorPessoa: number;
  carvaoPorPessoa: number;
  salPorPessoa: number;
  refrigerantePorPessoa: number;
  aguaPorPessoa: number;
  farofaPorPessoa: number;
};

const Contador = (props: ContadorProps) => {
  //DESESTRUTURAÇÃO
  const {
    tituloContador,
    gramasPorPessoa,
    paoDeAlhoPorPessoa,
    carvaoPorPessoa,
    salPorPessoa,
    refrigerantePorPessoa,
    aguaPorPessoa,
    farofaPorPessoa,
  } = props;

  const [qtdPessoas, setQtdPessoas] = useState(0);

  const adicionarPessoa = () => {
    setQtdPessoas((prev) => prev + 1);
  };

  const subtrairPessoa = () => {
    setQtdPessoas((prev) => (prev > 0 ? prev - qtdPessoas : 0));
  };
  const zerarTudo = () => {
    setQtdPessoas(0);
  };

  return (
    <div className="Contador">
      <span>{tituloContador}</span>
      <span className="Contador__numero">
        Qtd Carne {(qtdPessoas * gramasPorPessoa) / 1000} kg
      </span>
      <span className="Contador__numero">
        {" "}
        Qts Pão de Alho {qtdPessoas * paoDeAlhoPorPessoa} un
      </span>
      <span className="Contador__numero">
        {" "}
        Qts Carvão {qtdPessoas * carvaoPorPessoa} kg
      </span>
      <span className="Contador__numero">
        {" "}
        Qts Sal {(qtdPessoas * salPorPessoa) / 1000} kg
      </span>
      <span className="Contador__numero">
        {" "}
        Qts Refrigerante {(qtdPessoas * refrigerantePorPessoa) / 1000} L
      </span>
      <span className="Contador__numero">
        {" "}
        Qts Água {qtdPessoas * aguaPorPessoa / 1000} L
      </span>
      <span className="Contador__numero">
        {" "}
        Qts Farofa {(qtdPessoas * farofaPorPessoa) / 1000} kg
      </span>
      <div className="Contador__acoes">
        <button
          onClick={() => subtrairPessoa()}
          disabled={qtdPessoas === 0}
        >
          -
        </button>
        <button onClick={() => adicionarPessoa()}>+</button>
      </div>
      <button onClick={() => zerarTudo()}>Zerar contador</button>
    </div>
  );
};

export default Contador;
