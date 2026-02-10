var pessoas = [];
var mensagem = window.document.getElementById("msg")

function enviar(){
    var nome=document.getElementById("idnome")
    if(nome == " "){
        alert('Registre uma pessoa')
    }else{
        pessoas.push(nome.value)
        nome.value=""
        alert('Pessoa registrada')
    }
}

function exibir(){
    mensagem.innerHTML="Pessoas registradas: <br>" 
    for(var i=0;i<pessoas.length;i++){
        mensagem.innerHTML+=`${pessoas[i]} <br>`
    }
}