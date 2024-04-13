import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderHomePage from "../../components/headerHomePage/HeaderHomePage";
import CardJogos from "../../components/cardJogos/CardJogos";
import './HomePage.scss'
import listaJogosConst from "../../constants/listaJogos";
import categoriasConst from "../../constants/categorias";



const HomePage = () => {
    const navigate = useNavigate()

    const [jogos, setJogos] = useState([])
    
    //Faz a busca pra verificar se existe usuário logado no sessionStorage
    const userIsLoggedIn: any = sessionStorage.getItem('UsuarioLogado');
    const userIsLoggedInObjt = JSON.parse(userIsLoggedIn)
    
  
    //Faz o get no localStorage pra trazer os jogos
    const listaJogosLocalStorage: any = localStorage.getItem('listaJogos')
    const listaJogosObj = JSON.parse(listaJogosLocalStorage)
    const categoriasLocalStorage: any = localStorage.getItem('categorias')
    const categoriasObj = JSON.parse(categoriasLocalStorage)

    if(!listaJogosObj && !categoriasObj) {
        localStorage.setItem('listaJogos', JSON.stringify(listaJogosConst));
        localStorage.setItem('categorias' , JSON.stringify(categoriasConst))
    }
    
    //Faz a chamamada do setJogos para puxar e renderizar os jogos na pagina
    useEffect(() => {setJogos(listaJogosObj)},[navigate])

    const logout = () => {
        if(userIsLoggedInObjt == null) {
            navigate("/login")
        }else if(userIsLoggedInObjt) {
            sessionStorage.clear()
            navigate("/")
        }
    }

    const buscaJogos = (e: any) => {
        e.preventDefault()

        if (e.target[0].value != '') {
            const resultadoListaJogos = listaJogosObj.filter((objeto: any) => objeto.nome.toLowerCase().includes(e.target[0].value.toLowerCase()))
            setJogos(resultadoListaJogos)
        } else
            if (e.target[1].value != 'Todos') {
                const resultadoListaJogos = listaJogosObj.filter((objeto: any) => objeto.categoria.toLowerCase().includes(e.target[1].value.toLowerCase()))
                setJogos(resultadoListaJogos)
            } else if(e.target[1].value == 'Todos'){
                setJogos(listaJogosObj)
            }
    }

    const handleJogoSelecionado = (nomeJogo: string) => {
        listaJogosConst.map((index:any)=> {if(index.nome == nomeJogo){
            localStorage.setItem('jogoSelecionado' , JSON.stringify(index))
    }})
    navigate("/detalhesJogo")
    }
  
    return (
        <div className="HomePage">
            {(
                <div className="HomePage">
                    <HeaderHomePage buscaJogos={buscaJogos} categoriaJogos={categoriasObj} logout={logout} email={userIsLoggedInObjt == null?"Entrar":userIsLoggedInObjt.email} tituloBtn={userIsLoggedInObjt == null? "Login":"Logout"}></HeaderHomePage>
                    <div className="HomePage__cardJogos">
                        <CardJogos jogos={jogos} onJogoSelecionado={handleJogoSelecionado}></CardJogos>
                    </div>
                </div>
            )}
            
        </div>
    )
}
export default HomePage