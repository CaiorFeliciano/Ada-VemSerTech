import './CardJogos.scss'
type CardJogosType = {
    jogos: string[]
    onJogoSelecionado: (nomeJogo: string) => void
}
const CardJogos = (props: CardJogosType) => {

    const jogoNome = (nome: string) => {
        // Chama a função de callback para passar o nome do jogo para outra página
        props.onJogoSelecionado(nome);
    }

    return (
        <>
            {props.jogos.map((jogo: any) => (
                <div className='CardJogos' key={jogo.nome} id={jogo.nome}>
                    <img src={jogo.imagem} alt="" />
                    <button className='CardJogos__btn' onClick={() => jogoNome(jogo.nome)}>Exibir jogo</button>
                </div>
            ))}
        </>
    )
}
export default CardJogos