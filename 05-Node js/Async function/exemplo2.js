function pegarNumero(){
    return Promise.resolve(42);
    //Promise.resolve: promise já resolvida, com o valor 42 definido.
}

async function executar() {

    //await: espera uma Promise terminar e devolve o resultado.
    const numero = await pegarNumero()
    console.log(numero);
}

executar();