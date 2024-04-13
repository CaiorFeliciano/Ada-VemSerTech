import { useNavigate } from 'react-router-dom';
import StarRating from '../../components/avalicaoJogos/AvaliacaoJogos';
import DescriptionComponent from '../../components/descricaoJogo/DescricaoJogo';
import './detalhesJogos.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const DetalhesJogos = () => {
    
    const navigate = useNavigate()
    
    useEffect(() => {
        const avaliacoesString = localStorage.getItem("avaliacoesUsuarios");
        const avaliacoesObj = avaliacoesString ? JSON.parse(avaliacoesString) : [];
        
        // Filtra as avaliações apenas para o jogo selecionado
        const avaliacoesJogoSelecionado = avaliacoesObj.filter((avaliacao:any) => avaliacao.nomeJogo === jogoSelecionadoObj.nome);
        setAvalicaoUsers(avaliacoesJogoSelecionado);
    }, [navigate])

    const [rating, setRating] = useState(0);
    const [avaliacaoUsers, setAvalicaoUsers] = useState([])
    
    const jogoSelecionado: any = localStorage.getItem("jogoSelecionado")
    const jogoSelecionadoObj = JSON.parse(jogoSelecionado)

    const jogadorLogado: any = sessionStorage.getItem("UsuarioLogado")
    const jogadorLogadoObj = JSON.parse(jogadorLogado)

    const avaliacoesString = localStorage.getItem("avaliacoesUsuarios");
    const avaliacoesObj = avaliacoesString ? JSON.parse(avaliacoesString) : [];
  
    const handleClick = (value: any) => {
        if (jogadorLogadoObj) {
            setRating(value);
        } else if (jogadorLogadoObj == null) {
            console.log("Você precisa esta logado para fazer avaliação!!!")
        }
    };

    const salvarHandle = (e: any) => {
        e.preventDefault()
        const avalicaoUser = {
            nomeUsuario: jogadorLogadoObj.nome,
            nomeJogo: jogoSelecionadoObj.nome,
            qtdEstrelasUser: rating,
            comentarioUser: e.target[0].value
        }
        avaliacoesObj.push(avalicaoUser)
        localStorage.setItem('avaliacoesUsuarios', JSON.stringify(avaliacoesObj))
        window.location.reload();
    }

    return (
        <>
            <div className="ContainerDetalhesJogos">
                <div>
                    <img src={jogoSelecionadoObj.imagem}/>
                </div>
                <div className="ContainerDetalhesJogos__conteudo">
                    <h3 className="ContainerDetalhesJogos__h3">{jogoSelecionadoObj.nome}</h3>
                    <span className="ContainerDetalhesJogos__span">{jogoSelecionadoObj.empressa} - {jogoSelecionadoObj.categoria}</span>
                    <button className='Formulario__btn'><link rel="stylesheet" href={jogoSelecionadoObj.urlJogo}/>JOGAR</button>
                </div>
            </div>

            <div className='CatainerDetalhesJogos2'>
                <div className='CatainerDetalhesJogos2__descricao'>
                    <h3 className='CatainerDetalhesJogos2__h3'>Descrição</h3>
                    <DescriptionComponent initialText={jogoSelecionadoObj.descricao} maxLength={500} />
                </div>
                <div className='CatainerDetalhesJogosAvaliacao'>
                    <h3 className='CatainerDetalhesJogosAvaliacao__h3'>Faça sua avaliação</h3>
                    <StarRating handleClick={handleClick} rating={rating} />
                    <form className='CatainerDetalhesJogosAvaliacao__form' onSubmit={salvarHandle}>
                        <textarea className='CatainerDetalhesJogosAvaliacao__input' placeholder='Envie seu comentário' />
                        <button className='CatainerDetalhesJogosAvaliacao__btn' type='submit'>Enviar</button>
                    </form>
                </div>
                <div className='ContainerAvalicaoUsers'>
                    <h3 className='ContainerAvalicaoUsers__h3'>Avaliações dos usuários</h3>
                    {avaliacaoUsers.map((index: any, idx: number) => (
                        <div className='ContainerAvalicaoUsers__comentarios'key={idx}>{[1, 2, 3, 4, 5].map((value) => (<span key={value} style={{ color: value <= index.qtdEstrelasUser?'gold':'gray'}}>&#9733;</span>))}
                        <p><strong>{index.nomeUsuario}@: - {index.comentarioUser}</strong></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default DetalhesJogos

