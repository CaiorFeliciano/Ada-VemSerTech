import { QuantidadeCarne } from "../constants/carne.constant";
import { QuantidadePaoDeAlho } from "../constants/paoDeAlho.constant";

type useChurrascometroProps = {
  qtdHomem: number;
  qtdMulher: number;
  qtdCrianca: number;
};

const useChurrascometro = ({
  qtdHomem,
  qtdMulher,
  qtdCrianca,
}: useChurrascometroProps) => {
  const quantidadeCarneEmKg =
    (QuantidadeCarne.HOMEM * qtdHomem +
      QuantidadeCarne.MULHER * qtdMulher +
      QuantidadeCarne.CRIANCA * qtdCrianca) /
    1000;

  const quantidadePaoDeAlhoUN =
    QuantidadePaoDeAlho.HOMEM * qtdHomem +
    QuantidadePaoDeAlho.MULHER * qtdMulher +
    QuantidadePaoDeAlho.CRIANCA * qtdCrianca;

  return {
    quantidadeCarneEmKg,
    quantidadePaoDeAlhoUN,
  };
};

export default useChurrascometro;
