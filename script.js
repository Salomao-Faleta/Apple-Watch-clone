const imagemVisualizacao = document.querySelector('#imagem-visualizacao')

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-clato',
    pasta: 'imagens-rosa-claro'
}

const minhaLista = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

let imagemSelecionada = 1;

function trocarImagem(){
    //trocando imagem atraves do id do elemento
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);

    imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSelecionada}.jpeg`
}