function soma(...valores){
    let resultado = 0;
    for(let v of valores){
        resultado+=v
    }
    return resultado
}

console.log(soma(1,2,3))