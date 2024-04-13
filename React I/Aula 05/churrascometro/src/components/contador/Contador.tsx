import { Dispatch, SetStateAction } from "react";

type ContadorProps = {
  titulo: string;
  quantidade: number;
  setQuantidade: Dispatch<SetStateAction<number>>;
};

const Contador = (props: ContadorProps) => {
  const decrementarQtd = () => {
    props.setQuantidade((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const incrementarQtd = () => {
    props.setQuantidade((prev) => prev + 1);
  };

  return (
    <div className="Card">
      <div className="Card__titulo"> {props.titulo} </div>
      <div className="Card__contador">
        <button onClick={decrementarQtd}>-</button>
        <span>{props.quantidade} </span>
        <button onClick={incrementarQtd}>+</button>
      </div>
    </div>
  );
};

export default Contador;
