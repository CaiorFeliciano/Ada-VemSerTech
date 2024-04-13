type ResultadoProps = {
  quantidadeCarne: number;
  quantidadePaoDeAlho: number;
};

const Resultado = ({
  quantidadeCarne,
  quantidadePaoDeAlho,
}: ResultadoProps) => {
  return (
    <>
      <div className="Resultado">
        <p>
          Quantidade de Carne: <b>{quantidadeCarne} kg</b>
        </p>
        <p>
          Quantidade de Pão de Alho <b>{quantidadePaoDeAlho} un</b>
        </p>
      </div>
    </>
  );
};

export default Resultado;
