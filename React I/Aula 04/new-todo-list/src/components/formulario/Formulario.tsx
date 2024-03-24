import { ItemType } from "../../types/itemType";

type FormularioProps = {
  submit: (novoItem: ItemType) => void;
};

const Formulario = (props: FormularioProps) => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    const nome = e.target[0].value;
    const categoria = e.target[1].value;
    const dataConclusao = e.target[2].value;
    const novoItem: ItemType = {
      id: new Date().toISOString(),
      nome: nome,
      categoria: categoria,
      dataConclusao: dataConclusao,
    };
    props.submit(novoItem);
  };

  return (
    <form className="Formulario" onSubmit={submitHandler}>
      <label htmlFor="nome">Nome da tarefa: </label>
      <input type="text" name="nome" id="nome" />

      <label htmlFor="categoria">Categorias: </label>
      <select name="categoria" id="categoria">
        <option>Pessoal</option>
        <option>Profissional</option>
        <option>Casa/Familia</option>
        <option>Outros</option>
      </select>

      <label htmlFor="dataConclusao">Data conclusão: </label>
      <input type="date" name="dataConclusao" id="dataConclusao" />

      <button type="submit">Salvar</button>
    </form>
  );
};

export default Formulario;
