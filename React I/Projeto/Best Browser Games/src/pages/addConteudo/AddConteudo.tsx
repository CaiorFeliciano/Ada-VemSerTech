import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './AddConteudo.scss'

const AddConteudo = () => {
    const navigate = useNavigate()

    const categoriasLocalStorage: any = localStorage.getItem('categorias')
    const categoriasObj = JSON.parse(categoriasLocalStorage)

    const [categoriaState, setCategoriaState] = useState([])


    useEffect(() => { setCategoriaState(categoriasObj) }, [])


    const editarCategoriaHandler = (e: any) => {
        e.preventDefault()
        categoriasObj.map((index: any) => {
            if (index.categoria == e.target[0].value) {
                index.categoria = e.target[1].value
                localStorage.setItem('categorias', JSON.stringify(categoriasObj))     
            }
        })
        const listaJogosLocalStorage: any = localStorage.getItem('listaJogos')
        const listaJogosObj = JSON.parse(listaJogosLocalStorage)

        listaJogosObj.map((index:any) => {
            if(e.target[0].value == index.categoria){
                index.categoria = e.target[1].value
            }
        })
        localStorage.setItem('listaJogos' , JSON.stringify(listaJogosObj))
        window.location.reload();
    }

    const adicionarCategoriaHandler = (e: any) => {
        e.preventDefault()
        categoriasObj.map((index: any) => {
            if (index.categoria == e.target[0].value) { alert("Essa categoria já existe") }
        })
        categoriasObj.push({ categoria: e.target[0].value })
        localStorage.setItem('categorias', JSON.stringify(categoriasObj))
        window.location.reload();
    }

    const adicionarJogosHandler = (e: any) => {
        e.preventDefault()
        const novoJogo = {
            nome: e.target[0].value,
            urlJogo: e.target[1].value,
            descricao: e.target[2].value,
            categoria: e.target[3].value,
            imagem: e.target[4].value,
        }
        const listaJogosLocalStorage: any = localStorage.getItem('listaJogos')
        const listaJogosObj = JSON.parse(listaJogosLocalStorage)
        listaJogosObj.push(novoJogo)
        localStorage.setItem('listaJogos' , JSON.stringify(listaJogosObj))
        window.location.reload();
    }

    const voltarHandler = () => {
        navigate('/')
    }

    return (
        <div className="containerPrincipal">
            <div className="ConatinerAddConteudo">
            <div className="Formulario">
                <h2 className="Formulario__h2">Categorias</h2>
                <form className="Formulario__inputs" onSubmit={editarCategoriaHandler}>
                    <select className="Formulario__input">
                        <option>Categorias</option>
                        {categoriaState.map((index: any) => <option key={index.categoria}>{index.categoria}</option>)}
                    </select>
                    <input className="Formulario__input" type="text" placeholder="Editar categoria" />
                    <button className='Formulario__btn' type="submit">Salvar</button>
                </form>
                <form className="Formulario__inputs" onSubmit={adicionarCategoriaHandler}>
                    <input className="Formulario__input" type="text" placeholder="Adicionar nova categoria" />
                    <button className='Formulario__btn' type="submit">Adicionar</button>
                </form>
            </div>
            <div className="Formulario">
                <h2 className="Formulario__h2">Jogos</h2>
                <form className="Formulario__inputs" onSubmit={adicionarJogosHandler}>
                    <input className="Formulario__input" type="text" placeholder="Digite o nome do jogo" />
                    <input className="Formulario__input" type="text" placeholder="Coloque a url do jogo" />
                    <input className="Formulario__input" type="text" placeholder="Descrição do jogo" />
                    <select className="Formulario__input">
                        <option>Categorias</option>
                        {categoriaState.map((index: any) => <option key={index.categoria}>{index.categoria}</option>)}
                    </select>
                    <input className="Formulario__input" type="text" placeholder="url na imagem do jogo" />
                    <button className='Formulario__btn' type="submit">Adicionar jogo</button>
                </form>
            </div>
        </div>
        <div className="ConatinerAddConteudo">
            <button className='Formulario__btn' onClick={voltarHandler}>VOLTAR</button>
        </div>
        </div>
    )
}
export default AddConteudo