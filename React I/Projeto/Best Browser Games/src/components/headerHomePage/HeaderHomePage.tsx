import Menu from "../menu/Menu";
import "./HeaderHomePage.scss";

type HeaderHomePageType = {
  email: string;
  buscaJogos: (e: any) => void;
  logout: () => void;
  tituloBtn: string;
  categoriaJogos: string[];
};
const HeaderHomePage = (props: HeaderHomePageType) => {
  return (
    <header className="Header">
      <h3 className="Header__h3">Best Browser Games</h3>
      <form className="Form" onSubmit={props.buscaJogos}>
        <input
          className="Form__input"
          type="text"
          placeholder="Pequise seu jogo aqui"
        />
        <select className="Form__select">
          <option>Todos</option>
          {props.categoriaJogos.map((index: any) => (
            <option key={index.categoria}>{index.categoria}</option>
          ))}
        </select>
        <button className="Form__btn">BUSCAR</button>
      </form>
      <div className="LogoutUser">
        <span className="LogoutUser__span">{props.email}</span>
        <Menu logout={props.logout} tituloBtn={props.tituloBtn}></Menu>
      </div>
    </header>
  );
};
export default HeaderHomePage;
