import { noticiasConstants } from "../../constants/noticiasConstants";
import Manchete from "../manchete/Manchete";

const ListaManchete = () => {

  const naoHaNoticias = <span>Não há notícias disponíveis</span>

  return (
    <div>
      {noticiasConstants.length > 0 ? noticiasConstants.map(noticia => (
        <Manchete titulo={noticia.titulo} substitulo={noticia.subtitulo} imagem={noticia.imagem}/>
      )) : naoHaNoticias}
    </div>
  );
};

export default ListaManchete;
