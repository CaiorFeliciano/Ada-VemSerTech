import "./Manchete.scss";

type MancheteProps = {
  titulo: string;
  substitulo: string;
  imagem: string;
};

const Manchete = (props: MancheteProps) => {
  return (
    <section className="Manchete">
      <div className="Manchete__descricao">
        <h2 className="Manchete__titulo">{props.titulo}</h2>
        <span className="Manchete__subtitulo">{props.substitulo}</span>
      </div>
      <img
        src={props.imagem}
        alt={props.titulo}
      />
    </section>
  );
};

export default Manchete;
