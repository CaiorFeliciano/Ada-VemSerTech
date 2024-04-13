import { Link } from "react-router-dom"
import './FormLogin.scss'

type FormLoginType = {
    FormLoginHandler: (e:any) => void
}

const FormLogin = (props:FormLoginType) => {

    return (
        <div className="Formulario">
            <h2 className='Formulario__h2'>Faça seu login</h2>
            <form className='Formulario__inputs' onSubmit={props.FormLoginHandler}>
                <input className='Formulario__input' type="email" placeholder="E-mail"/>
                <input className='Formulario__input' type="password" placeholder="Senha"/>
                <button className='Formulario__btn' type="submit">LOGIN</button>
            </form>
            <span>Não tem uma conta ? <Link id="LinkCriarConta" to={'/cadastro'}> Criar conta</Link></span>
            <span>Quer voltar pra pagina principal? <Link id="LinkCriarConta" to={'/'}>home</Link></span>
        </div>
    )
}
export default FormLogin