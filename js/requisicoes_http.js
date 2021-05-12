let xmlhttp;
let chaveApi = '9c2c75d9d67c3f98cc98bb29450115c5';
let url = "https://api.themoviedb.org/3/search/movie?api_key=" + chaveApi;

let urlImagem = 'https://image.tmdb.org/t/p/w200';

function conferirSePesquisaValida(){
    let textoBusca = document.getElementById('busca').value;
    document.getElementById('botao-pesquisa').disabled = !ehTextoValido(textoBusca);
}

function ehTextoValido(textoBusca){
    return textoBusca != null && true && textoBusca!== ''
}

function callback(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        let retorno = JSON.parse(xmlhttp.responseText);

        let listaFilme = "";
        for(let i=0; i< retorno.results.length; i++){

            listaFilme +=  criarCartao(
                retorno.results[i].title,
                retorno.results[i].overview,
                retorno.results[i].poster_path
            );
        }
        botaoPronto();
        document.getElementById('saida').innerHTML = listaFilme;
    }

}

function pesquisarFilme(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callback;

    let query = document.getElementById('busca').value;
    xmlhttp.open("GET", url + "&query=" + query, true);
    xmlhttp.send();
    botaoCarregando();
}



function botaoCarregando(){
    document.getElementById('botao-pesquisa').innerHTML =
    '<div class="spinner-border spinner-border-sm text-light" role="status">'+
        '<span class="sr-only">Loading...</span>'+
    '</div>'
}

function botaoPronto(){
    document.getElementById('botao-pesquisa').innerHTML =
        '<i class="fas fa-search"></i>'
}

function criarCartao(titulo, resumo, urlPoster){
    return '<div class="card" style="width: 18rem;">'+
        '<img class="card-img-top" src="'+urlImagem + urlPoster +'" alt="Poster Indisponível">'+
            '<div class="card-body">'+
               '<h5 class="card-title">'+titulo+'</h5>'+
                '<p class="card-text">'+resumo+'</p>'+
            '</div>'+
    '</div>'
}

