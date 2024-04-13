import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './PerfilUser.scss'

const PerfilUser = () => {
    const navigate = useNavigate()

    const usuariosString = sessionStorage.getItem('UsuarioLogado');
    const usuariosLogados = usuariosString ? JSON.parse(usuariosString) : [];
    

    const [formData, setFormData] : any = useState({
        nome: '',
        email: '',
        senha: '',
        dataNascimento: '',
        estado: '',
        pais: ''
    });
   
    useEffect(() => {
        setFormData(usuariosLogados)
    }, [navigate])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const salvarHandler = (e:any) =>{
        e.preventDefault()
        const usuariosString = localStorage.getItem('usuarios');
        const usuarios = usuariosString ? JSON.parse(usuariosString) : [];
        usuarios.map((usuario:any) => {
            if(usuario.nome == usuariosLogados.nome){
                usuario.nome = formData.nome
                usuario.email = formData.email
                usuario.senha = formData.senha
                usuario.dataNascimento = formData.dataNascimento
                usuario.estado = formData.estado
                usuario.pais = formData.pais
                localStorage.setItem('usuarios' , JSON.stringify(usuarios))
                sessionStorage.setItem('UsuarioLogado' , JSON.stringify(formData))
            }
        })
    }
    const voltarPagina = () => {
        navigate('/')
    }
    return (
        <div className='ContainerForm'>
            {(
                <div className="Formulario">
                    <h2 className="Formulario__h2">Editar perfil</h2>
                    <form className="Formulario__inputs" onSubmit={handleChange}>
                        <input className="Formulario__input" type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
                        <input className="Formulario__input" type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
                        <input className="Formulario__input" type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
                        <input className="Formulario__input" type="date" name="dataNascimento" placeholder="Data de Nascimento" value={formData.dataNascimento} onChange={handleChange} />
                        <input className="Formulario__input" type="text" name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} />
                        <input className="Formulario__input" type="text" name="país" placeholder="País" value={formData.pais} onChange={handleChange} />
                        <div className='Formulario__divBtns'>
                        <button className='Formulario__btn' type="submit" onClick={salvarHandler}>Salvar</button>
                        <button className='Formulario__btn' onClick={voltarPagina}>Voltar</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default PerfilUser;