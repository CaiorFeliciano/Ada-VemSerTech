import { textoConstants } from "../../constants/textoConstants";
import Texto from "../texto/Texto";

const ListaTexto = () => {
  return (
    <div>
      {textoConstants.map(texto => (
        <Texto titulo={texto.titulo} conteudo={texto.conteudo}/>
      ))}
    </div>
  )
}

export default ListaTexto