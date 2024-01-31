const imagemVisualizacao = document.querySelector('#imagem-visualizacao');
const tituloProduto = document.querySelector('#titulo-produto');

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
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;


function trocarImagem() {

    //trocando imagem atraves do id do elemento
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);

    imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSelecionada}.jpeg`
}

function trocarTamnho() {
    // atualizar variavel de controle do tamnho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)

    // mudar o titulo do produto
    tituloProduto.innerHTML = `Pulseira loop esportiva azul-inverno para caixa de ${opcoesTamanho[tamanhoSelecionado]}`


    //mudar o tamnho de acordo com a opção
    // Com operador ternário
    tamanhoSelecionado == 0 ? imagemVisualizacao.classList.add('caixa-pequena') : imagemVisualizacao.classList.remove('caixa-pequena');

    //Modo padão - (mais "complexo")
    // if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
    //     imagemVisualizacao.classList.add('caixa-pequena');
    // }else{
    //     imagemVisualizacao.classList.remove('caixa-pequena');
    // }

    
}


