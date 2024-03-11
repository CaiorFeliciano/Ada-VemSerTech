import './Texto.scss'

type TextoProps = {
  titulo: string;
  conteudo: string;
};

const Texto = (props: TextoProps) => {
  return (
    <section className="Texto">
      <div className="Texto__descricao">
        <h2 className="Texto__titulo">{props.titulo}</h2>
        <p className="Texto__conteudo">{props.conteudo}</p>
      </div>
    </section>
  );
};

export default Texto;
