# Codemaster
# Projeto Codemaster DEV 2IF-DS 👩🏻‍💻

## Estado Inicial do projeto 💻🖱️
Recebi o HTML e CSS prontos. O layout renderiza perfeitamente, mas
o menu mobile não abre e o formulário recarrega a página...

_Lista de tarefas 📖_

     [✅] 1. Menu Mobile

O código realizado controla o menu mobile do site, ao clicar no ícone, classes são adicionadas ou removidas para transformar o ícone em X e mostrar ou esconder a lista de links. Enquanto está aberto, o scroll da página é bloqueado. Quando o usuário seleciona um link ou rola a página, tudo volta ao estado inicial e o scroll é liberado novamente.


     [✅] 2. Navegação ativa
Essa parte do código controla qual link da navegação ficará destacado. Primeiro, ele seleciona todos os links dentro de .navList. Depois, cria uma função que remove a classe "active" de todos os links e adiciona essa classe apenas ao link que foi clicado. Por fim, adiciona um evento de clique em cada link para executar essa função, fazendo com que o item selecionado fique visualmente marcado na navegação.

     [✅] 3. Alterna modo claro/escuro
Esse código permite alternar entre modo claro e modo escuro no site. Ao mudar o tema, a escolha é salva no localStorage, fazendo com que a página carregue novamente com o mesmo tema selecionado anteriormente.

     [✅] 4. Animação do título
Esse código cria uma animação no título, fazendo o texto vai aparecer e desaparecer letra por letra. Durante a animação, a cor do texto também muda. 

    [✅] 4. Animação da seção home
Esse código cria uma animação na seção Home. Quando a página carrega, a seção aparece suavemente na tela com um efeito de fade-in e um pequeno movimento de baixo para cima.

    [✅] 4. Animação das seções
Esse código cria animações nas seções do site. Inicialmente, elas ficam invisíveis e com pequenas transformações. Quando o usuário rola a página e cada seção aparece na tela, um observer ativa a animação, fazendo com que a seção surja suavemente e volte à posição normal. 

