function play(){
    document.getElementById('meu-audio').loop =true;
    document.getElementById('meu-audio').play()
    habilitarTocando();
}

function pause(){
    document.getElementById('meu-audio').pause()
    desabilitarTocando();
}

function aumentarVolume(){
    document.getElementById('meu-audio').volume+=0.1;
}

function diminuirVolume(){
    document.getElementById('meu-audio').volume-=0.1;
}

function desabilitarTocando(){
    let botoes = document.getElementsByClassName('somente-tocando')
    for (let i = 0; i < botoes.length; i++){
        botoes[i].disabled = true;
    }
}

function habilitarTocando(){
    let botoes = document.getElementsByClassName('somente-tocando')
    for (let i = 0; i < botoes.length; i++){
        botoes[i].disabled = false;
    }
}