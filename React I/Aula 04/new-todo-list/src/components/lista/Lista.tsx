import { ItemType } from "../../types/itemType";
import Item from "../item/Item";
import "./Lista.css";

type ListaProps = {
  items: ItemType[];
  deletar: (id: string) => void;
  concluir: (id: string) => void;
};

const Lista = (props: ListaProps) => {
  if (!props.items || props.items.length === 0) {
    return <div className="Lista">Não há atividades pendentes!</div>;
  }

  return (
    <div className="Lista">
      {props.items.map((item: ItemType) => (
        <Item
          key={item.id}
          item={item}
          deletar={props.deletar}
          concluir={props.concluir}
        />
      ))}
    </div>
  );
};

export default Lista;
