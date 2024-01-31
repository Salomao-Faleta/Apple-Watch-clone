const tituloProduto = document.querySelector('#titulo-produto');
const nomeCorSelecionada = document.querySelector('#nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');
const imagemVisualizacao = document.querySelector('#imagem-visualizacao');

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
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;


//Ver o lado do relogio
function trocarImagem() {
    //trocando imagem atraves do id do elemento
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);

    imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-${opcoesCores[corSelecionada].nome}/imagem-${imagemSelecionada}.jpeg`;
}

//trocar tamnho do relógio(41 ou 45)
function trocarTamnho() {
    // atualizar variavel de controle do tamnho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    
    // mudar o titulo do produto
    tituloProduto.innerHTML = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    
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

function trocarCor(){
    //atualizar variavel de controle do tamanho a caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idOpcaoSelecionada.charAt(0);

    //trocar titulo da pagina
    tituloProduto.innerHTML = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`

    //trocar nome da cor
    nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;

    //trocar miniaturas exibidas
    miniaturaImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
    miniaturaImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
    miniaturaImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;

    //trocar imagem de visualização
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;





}


