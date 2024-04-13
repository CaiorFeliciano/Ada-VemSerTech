import "./FormUser.scss";
import { Link } from "react-router-dom";

type InputFormtype = {
  titulo: string;
  tituloBotao: string;
  submitHandler: (e: any) => void;
};
const FormUser = (props: InputFormtype) => {
  return (
    <div className="Formulario">
      <h2 className="Formulario__h2">{props.titulo}</h2>
      <form className="Formulario__inputs" onSubmit={props.submitHandler}>
        <input className="Formulario__input" type="text" placeholder="Nome" />
        <input
          className="Formulario__input"
          type="email"
          placeholder="E-mail"
        />
        <input
          className="Formulario__input"
          type="password"
          placeholder="Senha"
        />
        <input
          className="Formulario__input"
          type="date"
          placeholder="Data de Nascimento"
        />
        <input className="Formulario__input" type="text" placeholder="Estado" />
        <input className="Formulario__input" type="text" placeholder="País" />
        <button className="Formulario__btn" type="submit">
          {props.tituloBotao}
        </button>
      </form>
      <span>
        Já tem conta?{" "}
        <Link id="LinkCriarConta" to={"/login"}>
          Login
        </Link>
      </span>
      <span>
        Quer voltar pra pagina principal?{" "}
        <Link id="LinkCriarConta" to={"/"}>
          Home
        </Link>
      </span>
    </div>
  );
};
export default FormUser;
