import { UsuarioType } from "../../types/usuario.type"
import FormUser from "../../components/formUsuario/FormUser"
import { useNavigate } from "react-router-dom"
import './CadastroPage.scss'

const CadastroPage = () => {
    const navigate = useNavigate()
    const submitHandler = (e: any) => {
        e.preventDefault()
        const novoUsuario: UsuarioType = {
            nome: e.target[0].value,
            email: e.target[1].value,
            senha: e.target[2].value,
            dataNascimento: e.target[3].value,
            estado: e.target[4].value,
            pais: e.target[5].value,
        }

        for (let prop in novoUsuario) {
            if(novoUsuario[prop] == ''){
                return
            }
            else{
                const usuariosString = localStorage.getItem('usuarios');
                const usuarios = usuariosString ? JSON.parse(usuariosString) : [];
                usuarios.push(novoUsuario);
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                navigate('/login')
            }
            return
        }
    }

    return (
        <div className="ContainerForm">
            <FormUser titulo="Faça seu cadastro" tituloBotao="CADASTRAR" submitHandler={submitHandler}></FormUser>
        </div>
    )
}
export default CadastroPage