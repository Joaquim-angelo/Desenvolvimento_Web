// Função Async (Assincrona)
///função async: tipo de função que sempre retorna uma Promise.
//Promisse: representa um valor que ainda não está disponível, mas vai estar no futuro (ou vai dar erro).
// Geralmente utilizada em requisições de API's ou bancos de dados

async function saudacao() {
    return "Olá!";
}

//A função then espera a promisse.
//Observa-se também que then é uma arrow function, com a varíavel criada "resultado" que armazena o valor da promisse
saudacao().then(resultado => console.log(resultado));