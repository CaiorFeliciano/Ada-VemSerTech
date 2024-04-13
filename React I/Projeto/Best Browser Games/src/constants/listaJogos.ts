import categoriasConst from "./categorias";

type listaJogostype = {
  nome: string;
  urlJogo: string;
  descricao: string;
  categoria: string;
  imagem: string;
  empressa: string;
};

const listaJogosConst: listaJogostype[] = [
  {
    nome: "Elden Ring",
    empressa: "Bandai Namco",
    urlJogo: "https://www.xbox.com/pt-br/games/store/elden-ring/9p3j32ctxlrz",
    descricao: `O NOVO RPG DE AÇÃO E FANTASIA.
Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.

• Um mundo vasto e emocionante
Um mundo vasto onde campos abertos e uma variedade de situações e masmorras imensas, com complexos designs tridimensionais se conectam com fluidez. Conforme explora, sinta a alegria de descobrir poderosas e desconhecidas ameaças que aguardam por você, levando a um grande senso de conquista.

• Crie seu próprio personagem
Além de personalizar a aparência do seu personagem, você pode combinar livremente armas, armaduras e magias que equipar. Você pode desenvolver seu personagem de acordo com seu estilo de jogo, como aumentar a força muscular para se tornar um poderoso guerreiro, ou dominar a magia.

• Um drama épico nascido de um mito
Uma história cheia de camadas, contada em fragmentos. Um drama épico onde os vários pensamentos dos personagens se interligam nas Terras Intermédias.

• Jogo on-line único que conecta você livremente aos outros
Além do multijogador, onde você pode se conectar diretamente com outros jogadores e viajarem juntos, o jogo suporta um elemento on-line assíncrono único que permite que você sinta a presença dos outros.`,
    categoria: categoriasConst[4].categoria,
    imagem:
      "https://store-images.s-microsoft.com/image/apps.25322.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.d230176a-d7a2-4696-ad23-ff53a6e004df?q=90&w=177&h=265",
  },
  {
    nome: "Red Dead Redemption 2",
    empressa: "Rockstar Games",
    urlJogo:
      "https://www.xbox.com/pt-br/games/store/red-dead-redemption-2/9n2zdn7nwqkv",
    descricao: `Inclui Red Dead Redemption 2: Modo História e Red Dead Online.

        Vencedor de mais de 175 prêmios de Jogo do Ano e avaliado com mais de 250 notas máximas, Red Dead Redemption 2 é uma história épica de honra e lealdade no alvorecer dos tempos modernos.
        
        Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.
        
        Red Dead Redemption 2 também inclui o mundo compartilhado de Red Dead Online – trilhe seu próprio caminho enquanto enfrenta autoridades, gangues fora da lei e animais selvagens ferozes para construir uma vida na fronteira dos Estados Unidos. Monte um acampamento, cavalgue com ou sem um bando e explore tudo, das montanhas nevadas no norte aos pântanos do sul, de postos remotos a fazendas agitadas e cidades vibrantes. Vá atrás de recompensas, cace, pesque e negocie, procure tesouros exóticos, toque sua própria destilaria clandestina de Moonshine ou se torne Naturalista para aprender os segredos do reino animal e muito mais num mundo rico em detalhes. Inclui todos os recursos, conteúdos e melhorias adicionados desde o lançamento.
        
        Licença do software em www.rockstargames.com/eula; termos da conta em www.rockstargames.com/socialclub. O acesso não transmissível a funcionalidades especiais, como conteúdos, serviços e funções exclusivos, desbloqueáveis, online ou para transferência, serviços multijogador ou conteúdos de bónus podem solicitar um código de série válido para uso único, cobrar uma taxa adicional e/ou solicitar o registo de uma conta online (maiores de 13). O acesso a funcionalidades especiais pode necessitar de uma ligação à internet, não estar disponível para todos os utilizadores ou a todas as alturas e ser encerrado, modificado ou oferecido sob novos termos com um aviso prévio de 30 dias. A violação do EULA, do Código de Conduta ou de outras políticas pode resultar na restrição ou rescisão de acesso ao jogo ou conta online. Para apoio técnico e assistência ao cliente, visita www.rockstargames.com/support.
        
        O conteúdo deste videojogo é meramente fictício e não tenciona representar ou retratar qualquer evento, pessoa ou entidade reais e quaisquer semelhanças são pura coincidência. Os criadores e distribuidores deste videojogo de nenhuma forma sancionam, aprovam ou encorajam o tipo de comportamento retratado neste videojogo. A cópia não autorizada, a engenharia inversa, a transmissão, a exibição pública, o aluguer, a exploração comercial ou a desativação da proteção de cópia são estritamente proibidas.
        
        Rockstar Games, Inc. © 2005-2018. Rockstar Games, Red Dead Redemption e R* são marcas/logótipos/copyrights da Take-Two Interactive. Todas as outras marcas e marcas registadas pertencem aos seus respetivos detentores. Todos os direitos reservados.`,
    categoria: categoriasConst[7].categoria,
    imagem:
      "https://store-images.s-microsoft.com/image/apps.34695.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.b278e12f-c22c-4a2a-bb18-dfd26ca6cafc?q=90&w=177&h=265",
  },
  {
    nome: "Fortnite",
    empressa: "Epic Games Inc.",
    urlJogo: "https://www.xbox.com/pt-br/games/store/fortnite/bt5p2x999vh2",
    descricao: `O futuro do Fortnite chegou.

        Seja a última pessoa de pá no Battle Royale e na Construção Zero, explore e sobreviva no LEGO Fortnite, chegue voando à linha de chegada no Rocket Racing ou arranque aplausos num show no Fortnite Festival. Jogue milhares de Ilhas grátis feitas por criadores, incluindo jogos no estilo corrida mortal, magnata, sobrevivência zumbi e mais! Junte-se à comunidade de criação e construa sua própria Ilha com o Unreal Editor para Fortnite (UEFN) ou as Ferramentas do Modo Criativo do Fortnite.
        
        Cada Ilha do Fortnite recebe uma classificação etária, basta achar a Ilha ideal para você e suas amizades. Tudo isso no Fortnite!`,
    categoria: categoriasConst[1].categoria,
    imagem:
      "https://store-images.s-microsoft.com/image/apps.61483.70702278257994163.1152c6f1-f586-40eb-a61e-0f8bad1ee621.dac35347-06f6-4003-88b5-931747a876cf?q=90&w=177&h=265",
  },
  {
    nome: "Age of Empires IV: Edição de Aniversário",
    empressa: "Xbox Game Studios",
    urlJogo:
      "https://www.xbox.com/pt-br/games/store/age-of-empires-iv-edicao-de-aniversario/9phh1zwrsz41",
    descricao: `Por anos você lutou contra exércitos e fez da história a sua própria história. Chegou a hora de fazer história mais uma vez com uma nova era de jogos de estratégia. Conheça Age of Empires IV: Edição de Aniversário. Agora disponível em consoles Xbox.*

        Desfrute de maneiras inovadoras de viver um dos jogos de estratégia mais amados de todos os tempos com entradas nativas para controles Xbox, interface de usuário específica do console e um novo tutorial projetado para jogadores iniciantes visando fazer com que seja possível uma configuração fácil e com sucesso. Além disso, se você preferir jogar com teclado e mouse, pode conectá-los facilmente diretamente ao seu console.
        
        Volte à História – O passado é o prólogo enquanto você mergulha em um rico cenário histórico de 10 civilizações diversas de todo o mundo, do inglês ao chinês e ao Sultanato de Déli em sua busca pela vitória. Construa cidades, gerencie recursos e lidere suas tropas em batalhas terrestres e marítimas em 4 campanhas distintas com 35 missões que abrangem 500 anos de história, desde a Idade das Trevas até a Renascença.
        
        Trilhe seu caminho para a grandeza com figuras históricas. Viva as aventuras de Joana d'Arc em sua busca para derrotar os ingleses, ou comande poderosas tropas mongóis como Genghis Khan em sua conquista pela Ásia. A escolha é sua – e cada decisão que você tomar vai determinar o resultado da história.
        
        Desafie o Mundo – Entre online para competir, cooperar ou assistir com até 7 de seus amigos nos modos multijogador PVP e PVE no Xbox One Series X I S e até 3 amigos no Xbox One. (O modo multijogador do console online requer o Xbox Game Pass Ultimate ou Xbox Live Gold, assinaturas vendidas separadamente.)
        
        Jogue jogos personalizados com mods (Beta) - Jogue mapas personalizados e multijogador, cenários exclusivos de missões, pacotes de ajuste baseados em dados e novos modos de jogo para o Age dos Impérios IV.
        
        Uma era para todos os jogadores - Age of Empires IV é uma experiência convidativa para novos jogadores com um tutorial específico do console que ensina a essência da estratégia em tempo real e um modo de história de campanha projetado para jogadores iniciantes para ajudar a obter fácil configuração e sucesso. Mesmo assim, ainda é desafiador o suficiente para jogadores veteranos com novas mecânicas de jogo, estratégias evoluídas e técnicas de combate.
        
        *Este conteúdo está disponível nos consoles Xbox como um download gratuito para assinantes atuais do Xbox Game Pass e proprietários do Age of Empires IV para PC, exceto quem comprou pela Steam.`,
    categoria: categoriasConst[0].categoria,
    imagem:
      "https://store-images.s-microsoft.com/image/apps.63959.14235977975261210.106699ff-5046-4540-ac72-e248ae2c3818.f61be535-d1e6-46c7-a0b3-338fd9384f08?q=90&w=177&h=265",
  },
  {
    nome: "Rare Replay",
    empressa: "Microsoft Studios",
    urlJogo: "https://www.xbox.com/pt-br/games/store/rare-replay/c22t53sq7flm",
    descricao: `Para comemorar o seu 30º aniversário, a Rare reúne as aventuras dos seus personagens icônicos em uma coleção que atravessa décadas. Dos clássicos 2D mais antigos aos sucessos do Xbox 360, Rare Replay presenteia jogadores veteranos e novatos com um tesouro dos videogames.

        Ao lutar com os Battletoads, coletar Jiggies em Banjo-Kazooie e combater o futuro em Perfect Dark, você descobrirá conteúdo bônus e espiadas exclusivas na criação dos sucessos de Rare Replay. Domine o básico ou teste suas habilidades com novos desafios rápidos e Pontuação do Jogador de 10.000. Os melhores jogos estão de volta, oferecidos com carinho e exclusividade para Xbox One!`,
    categoria: categoriasConst[3].categoria,
    imagem:
      "https://store-images.s-microsoft.com/image/apps.14606.65780799141015212.07b74564-f8a6-4ab1-b868-91169ad4faff.9416d5a7-9aa0-47ab-b85e-5f4ff6f6fa9d?q=90&w=177&h=265",
  },
  {
    nome: "Genesis Noir",
    empressa:
      "https://www.xbox.com/pt-br/games/store/genesis-noir/9phk9d8clqcg",
    urlJogo: "a",
    descricao: `Uma aventura noir que se desdobra no tempo e espaço. Quando um triângulo amoroso entre seres cósmicos se transforma em um confronto implacável, você testemunha um tiro disparado por um deus ciumento, também conhecido como Big Bang. Mergulhe no universo em expansão e busque uma maneira de destruir a criação e salvar o seu amor.`,
    categoria: categoriasConst[2].categoria,
    imagem:
      "https://store-images.s-microsoft.com/image/apps.44029.14234812946294583.310a0a84-edb2-482c-a55c-b54922972168.f18bc892-cdc6-4b69-8651-c53bd52a2e54?q=90&w=177&h=265",
  },
  {
    nome: "Grand Theft Auto V",
    empressa: "Rockstar Games",
    urlJogo:
      "https://www.xbox.com/pt-br/games/store/grand-theft-auto-v-xbox-one/bpj686w6s0nh",
    descricao: `Vivencie o jogo em mundo aberto da Rockstar Games aclamado pela crítica , Grand Theft Auto V.

        Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com alguns dos criminosos mais assustadores e loucos do submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.
        
        Explore o deslumbrante mundo de Los Santos e Blaine County na experiência definitiva de Grand Theft Auto V, apresentando amplas atualizações e melhorias técnicas tanto para jogadores novos quanto para os que estiverem retornando. Além de distâncias maiores de renderização e melhor resolução, os jogadores podem esperar diversas adições e melhorias, incluindo:
        
        • Novas armas, veículos e atividades
        • Fauna adicional
        • Trânsito mais intenso
        • Novo sistema de folhagem
        • Efeitos de dano e de clima aprimorados, e muito mais
        
        Grand Theft Auto V também vem com Grand Theft Auto Online, o universo dinâmico e em constante evolução com nova jogabilidade online para até 30 jogadores no Xbox One. Todas as atualizações de jogabilidade e conteúdos criados pela Rockstar desde o lançamento do Grand Theft Auto Online também estão disponíveis para o Xbox One, e há muito mais ainda por vir.
        
        Você deve aceitar os termos de licença de software disponíveis em rockstargames.com/eula; termos de conta online em rockstargames.com/socialclub. Acesso intransferível para recursos como conteúdo exclusivo/desbloqueável/para donwload/online, serviços, ou funções, tais como serviços de multijogador ou conteúdo bônus, podem exigir código, pagamento de tarifa e/ou cadastramento de conta (13+). Acesso a determinados recursos pode precisar de uma conexão com a internet, não estar disponível a todos os usuários e pode ser encerrado, modificado e/ou oferecido sob diferentes termos com um aviso prévio de 30 dias. Violações do CLUF, Código de Conduta ou outras políticas podem resultar na restrição ou encerramento do acesso ao jogo ou conta online. Para atendimento ao cliente e suporte técnico, visite www.rockstargames.com/support. Para informações sobre serviços online, tarifas, restrições ou termos de licença de software que podem ser aplicados a este jogo, visite www.rockstargames.com.
        
        Alguns limites se aplicam à compra, ao uso ou ao resgate. Veja o CLUF em www.rockstargames.com/eula e os Termos de Serviço www.rockstargames.com/legal para detalhes.
        
        ©2008 - 2014 Rockstar Games, Inc. As marcas e logotipos Rockstar Games, Grand Theft Auto, Rockstar Games R* e GTA Five são marcas comerciais e/ou marcas registradas da Take-Two Interactive Software, Inc. nos Estados Unidos e/ou em outros países.`,
    categoria: categoriasConst[6].categoria,
    imagem:
      "https://store-images.s-microsoft.com/image/apps.32034.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.9b094362-c51d-49e5-9e92-80710c585fca?q=90&w=177&h=265",
  },
  {
    nome: "Minecraft",
    empressa: "Microsoft Studios",
    urlJogo: "https://www.xbox.com/pt-br/games/store/minecraft/9mvxmvt8zkwc",
    descricao: `Explore mundos gerados aleatoriamente e construa das casas mais simples aos maiores castelos. Jogue no modo criativo com recursos ilimitados, ou minere as profundezas do mundo no modo sobrevivência, criando armas e armaduras para se defender dos monstros.

        CARACTERÍSTICAS
        Skins, texturas e pacotes de Mash-up da comunidade! Saiba mais em minecraft.net/marketplace.
        
        ADD-ONS! Saiba mais em mineraft.net/addons, onde você pode experimentar alguns exemplos de graça ou aprender a criar os seus.
        
        Realms! Jogue com até 10 amigos em plataformas diferentes, a qualquer hora e de qualquer lugar. Teste de graça por 30 dias! Saiba mais em http://minecraft.net/realms.
        
        Suporte ao Xbox, incluindo conquistas
        
        Jogo multiplataforma para até oito jogadores em PCs com Windows 10, dispositivos Android, telefones e tablets iOS, Xbox One e plataformas de realidade virtual.
        
        Comandos permitem a você ajustar a jogabilidade: você pode presentear itens, invocar monstros, mudar a hora do dia e mais!`,
    categoria: categoriasConst[7].categoria,
    imagem:
      "https://store-images.s-microsoft.com/image/apps.17382.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.b8233937-28f5-4fdf-a696-6ef666a6ff6e?q=90&w=177&h=265",
  },
  {
    nome: "Minecraft",
    empressa: "Microsoft Studios",
    urlJogo: "https://www.xbox.com/pt-br/games/store/minecraft/9mvxmvt8zkwc",
    descricao: `Explore mundos gerados aleatoriamente e construa das casas mais simples aos maiores castelos. Jogue no modo criativo com recursos ilimitados, ou minere as profundezas do mundo no modo sobrevivência, criando armas e armaduras para se defender dos monstros.

        CARACTERÍSTICAS
        Skins, texturas e pacotes de Mash-up da comunidade! Saiba mais em minecraft.net/marketplace.
        
        ADD-ONS! Saiba mais em mineraft.net/addons, onde você pode experimentar alguns exemplos de graça ou aprender a criar os seus.
        
        Realms! Jogue com até 10 amigos em plataformas diferentes, a qualquer hora e de qualquer lugar. Teste de graça por 30 dias! Saiba mais em http://minecraft.net/realms.
        
        Suporte ao Xbox, incluindo conquistas
        
        Jogo multiplataforma para até oito jogadores em PCs com Windows 10, dispositivos Android, telefones e tablets iOS, Xbox One e plataformas de realidade virtual.
        
        Comandos permitem a você ajustar a jogabilidade: você pode presentear itens, invocar monstros, mudar a hora do dia e mais!`,
    categoria: categoriasConst[7].categoria,
    imagem:
      "https://store-images.s-microsoft.com/image/apps.17382.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.b8233937-28f5-4fdf-a696-6ef666a6ff6e?q=90&w=177&h=265",
  },
];
export default listaJogosConst;
