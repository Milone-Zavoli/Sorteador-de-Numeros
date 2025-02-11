function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (quantidade <= 0 || de <= 0 || ate <= 0) {  
        alert('Os valores devem ser maiores que zero!');
        return;
    }

    if (de > ate) {
        alert('O valor inicial deve ser menor que o valor final!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('A quantidade de números a serem sorteados deve ser menor ou igual ao intervalo informado!');
        return;        
    }

    let numerosSorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = gerarNumeroAleatorio(de,ate);
        if (numerosSorteados.includes(numero)){
            i--;
            continue;
        }else{
            numerosSorteados.push(numero);
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`
    
    habilitarBotaoReiniciar();
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function habilitarBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } 
}

function desabilitarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao')) {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');        
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    desabilitarBotaoReiniciar();
}