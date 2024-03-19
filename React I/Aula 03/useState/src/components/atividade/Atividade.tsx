import "./Atividade.css";

type AtividadeProps = {
  atividade: string;
};

const Atividade = ({ atividade }: AtividadeProps) => {
  return <div className="Atividade">{atividade}</div>;
};

export default Atividade;
