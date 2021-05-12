let textoJson = '{'+
   '"contatos": ['+
   '    {'+
   '        "nome": "Antonio dos Anjos",'+
   '        "email": "antonio@abc.com.br",'+
   '        "telefone": "031-98232-4455"'+
   '    },'+
   '    {'+
   '        "nome": "Carlos Amaral",'+
   '        "email": "carlos@xyz.com.br",'+
   '        "telefone": "031-97628-3349"'+
   '    }'+
   ']'+
'}';

let agenda = JSON.parse(textoJson);
//Converte Json para Javascript agenda
function processarContatos(){
    let lista = "";
    for(let i=0; i< agenda.contatos.length; i++){
        lista += agenda.contatos[i].nome + " - " +
            agenda.contatos[i].email + " - " +
            agenda.contatos[i].telefone +"<br>";
    }
    document.getElementById('saida-contatos').innerHTML = lista;
}

function imprimirJson(){
    document.getElementById('saida-json').innerHTML = JSON.stringify(agenda, null, 2);
}