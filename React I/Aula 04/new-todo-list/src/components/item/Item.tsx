import { ItemType } from "../../types/itemType";
import "./Item.css";

type ItemProps = {
  item: ItemType;
  deletar: (id: string) => void;
  concluir: (id: string) => void;
};

const Item = (props: ItemProps) => {
  return (
    <div className="Item">
      <p className="Item__nome">Nome: {props.item.nome}</p>
      <p className="Item__categoria">Categoria: {props.item.categoria}</p>
      <p className="Item__data">
        Data de Conclusão: {props.item.dataConclusao.toString()}
      </p>
      {!props.item.concluido && (
        <div className="Item__acoes">
          <button type="button" onClick={() => props.deletar(props.item.id)}>
            DELETAR
          </button>
          <button type="button" onClick={() => props.concluir(props.item.id)}>
            CONCLUIR
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
