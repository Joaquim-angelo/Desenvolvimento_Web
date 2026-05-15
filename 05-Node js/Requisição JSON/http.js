//Testando se há suporte para Fetch no navegador
if (self.fetch) {
    console.log("Há suporte");

    (async () => {
        //função para obter post.
        const json = await obterpost(1);
        const json_2 = await incluirpost({
            userID: 1,
            title: 'Meu post',
            body: 'Joaquim Angelo'
        })
        const json_3 = await incluirpost({
            userID: 1,
            title: 'Meu post atualizado',
            body: 'Joaquim Angelo'
        },1)
        const json_4 = await deletarpost(1)
        console.log(json);
        console.log(json_2);
        console.log(json_3)
    })();

} else {
    console.log("não há suporte");
}

async function obterjsonresposta(resposta) {
    if (!resposta.ok) {
    throw new Error(`${resposta.status} - ${resposta.statusText}`);
    }
    //formato de texto usado para representar dados estruturados.
    const json = await resposta.json();
    return json;
}

//Criando uma função async para buscar resultados de uma API de acordo com o id.
async function obterpost(id) {
    //A API utilizada é a do site: https://jsonplaceholder.typicode.com/
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    return obterjsonresposta(resposta)
}

//data = dados.
async function incluirpost(data){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/',
        {
        method: 'POST',//adição de dados
        body: JSON.stringify(data),//texto
        headers: {'Content-type':'application/json;charset=UTF-8'}
    });

    return obterjsonresposta(resposta);
}

async function atualizarpost(data,id){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/'+1,
        {
        method: 'PUT',//atualização de dados
        body: JSON.stringify(data),//texto
        headers: {'Content-type':'application/json;charset=UTF-8'}
    });

    return obterjsonresposta(resposta);
}

async function deletarpost(id){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/'+id,
        {
        method: 'DELETE',//atualização de dados
        headers: {'Content-type':'application/json;charset=UTF-8'}
    });

    return obterjsonresposta(resposta);
}

//Principais métodos HTTP para uso de API's:

//GET → buscar dados
//POST → enviar/criar dados
//PUT/PATCH → atualizar
//DELETE → apagar

