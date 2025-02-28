const initTempo = document.getElementById('temp-inicial')
const finTempo = document.getElementById('temp-final')
const initPosicao = document.getElementById('pos-inicial')
const finPosicao = document.getElementById('pos-final')
const res = document.getElementById('res')

function calcularVelMedia() {
    let varTempo = finTempo.value - initTempo.value;
    let varPosicao = finPosicao.value - initPosicao.value;
    let velocidade = varTempo / varPosicao;

    // TO DO: Conversão de medidas de velocidade;

    velocidade = verificarExcecoes(varTempo, varPosicao, velocidade);

    medida = formatarMensagem();
    res.innerHTML = `A velocidade média é: ${velocidade} ${medida}`;
}

// Função que formata a medida de velocidade
function formatarMensagem () {
    let distancia = document.getElementById('distancia');
    let tempo = document.getElementById('tempo');
    let medida;

    switch(distancia.value) {
        case "M":
            medida = "m/";
        break;
        case "K":
            medida = "k/";
        break;
    }
    
    switch(tempo.value) {
        case "S":
            medida += "s";
        break;
        case "M":
            medida += "m";
        break;
        case "H":
            medida += "h";
        break;
    }

   return medida;
}

// Função que verifica excessões das leis da física
function verificarExcecoes (varTempo, varPosicao, velocidade) {
    // Se os campos estiverem vazios preencher com 0
    if(initPosicao.value == 0 && finPosicao.value == 0) {
        initPosicao.value = "0";
        finPosicao.value = "0";
        velocidade = 0;
    } 
    if(initTempo.value == 0 && finTempo.value == 0) {    
        initTempo.value = "0";
        finTempo.value = "0";
        velocidade = 0;
    }

    // Se a variação for 0, o objeto ficou parado
    if(varPosicao == 0) {
        velocidade = 0;
    } 
    if(varTempo == 0) {
        velocidade = 0;
    } 

    // Se o tempo final for menor que tempo inicial, o tempo correu ao contrário
    if(finTempo.value < initTempo.value) {
        alert("O tempo inicial não pode ser maior que o tempo final!");
    }

    return velocidade;
}