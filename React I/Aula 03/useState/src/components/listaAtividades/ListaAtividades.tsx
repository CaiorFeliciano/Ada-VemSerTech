import Atividade from "../atividade/Atividade";
import "./ListaAtividades.css";

type listaAtividadesProps = {
  listaAtividades: string[];
};

const ListaAtividades = ({ listaAtividades }: listaAtividadesProps) => {
  return (
    <div className="ListaAtividades">
      {listaAtividades.map((atividade) => (
        <Atividade key={atividade} atividade={atividade} />
      ))}
    </div>
  );
};

export default ListaAtividades;
