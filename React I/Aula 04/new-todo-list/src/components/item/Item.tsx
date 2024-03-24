import { ItemType } from "../../types/itemType";
import "./Item.css";

type ItemProps = {
  item: ItemType;
};

const Item = (props: ItemProps) => {
  return (
    <div className="Item">
      <p className="Item__nome">Nome: {props.item.nome}</p>
      <p className="Item__categoria">Categoria: {props.item.categoria}</p>
      <p className="Item__data">
        Data de Conclusão: {props.item.dataConclusao.toString()}
      </p>
      <div className="Item__acoes">
        <button type="button">DELETAR</button>
      </div>
    </div>
  );
};

export default Item;
