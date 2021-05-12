function conferirSeCalculoPossivel(){
    let primeiroValor = document.getElementById('primeiro-numero').value;
    let segundoValor = document.getElementById('segundo-numero').value;

    if(primeiroValor && segundoValor){
        habilitarBotoes();
    }
    else {
        desabilitarBotoes();
    }
}

function desabilitarBotoes(){
    let botoes = document.getElementsByClassName('botao');
    for (let i = 0; i < botoes.length; i++){
        botoes[i].disabled = true;
    }
}

function habilitarBotoes(){
    let botoes = document.getElementsByClassName('botao');
    for (let i = 0; i < botoes.length; i++){
        botoes[i].disabled = false;
    }
}

function somar(){
    let primeiroValor = parseFloat(document.getElementById('primeiro-numero').value);
    let segundoValor = parseFloat(document.getElementById('segundo-numero').value);

    document.getElementById('resultado').value = (primeiroValor + segundoValor).toString();
}

function subtrair(){
    let primeiroValor = parseFloat(document.getElementById('primeiro-numero').value);
    let segundoValor = parseFloat(document.getElementById('segundo-numero').value);

    document.getElementById('resultado').value = (primeiroValor - segundoValor).toString();
}

function multiplicar(){
    let primeiroValor = parseFloat(document.getElementById('primeiro-numero').value);
    let segundoValor = parseFloat(document.getElementById('segundo-numero').value);

    document.getElementById('resultado').value = (primeiroValor * segundoValor).toString();
}

function dividir(){
    let primeiroValor = parseFloat(document.getElementById('primeiro-numero').value);
    let segundoValor = parseFloat(document.getElementById('segundo-numero').value);

    document.getElementById('resultado').value = (primeiroValor / segundoValor).toString();
}