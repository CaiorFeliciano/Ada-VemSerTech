import FormLogin from "../../components/formLogin/FormLogin"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()

    const FormLoginHandler = (e: any) => {
        e.preventDefault()

        const usuariosLocalStorage = localStorage.getItem('usuarios');
        const usuarios = usuariosLocalStorage ? JSON.parse(usuariosLocalStorage) : [];

        usuarios.map((index: any) => {
            if (index.email == e.target[0].value && index.senha == e.target[1].value) {
                sessionStorage.setItem('UsuarioLogado', JSON.stringify(index))
                navigate(`/`)
            }
            return
        })
    }

    return (
        <div className="ContainerForm">
            <FormLogin FormLoginHandler={FormLoginHandler}/>
        </div>
    )
}
export default LoginPage