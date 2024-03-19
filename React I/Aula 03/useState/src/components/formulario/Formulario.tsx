type FormularioProps = {
  nomeAtividade: string;
  atualizarNomeAtividade: (novoNome: string) => void;
  acaoSalvar: () => void;
};

const Formulario = ({
  nomeAtividade,
  acaoSalvar,
  atualizarNomeAtividade,
}: FormularioProps) => {
  return (
    <div className="Formulario">
      <input
        type="text"
        value={nomeAtividade}
        onChange={(e) => atualizarNomeAtividade(e.target.value)}
      />
      <button
        onClick={() => acaoSalvar()}
        disabled={nomeAtividade.trim().length === 0}
      >
        Salvar
      </button>
    </div>
  );
};

export default Formulario;
