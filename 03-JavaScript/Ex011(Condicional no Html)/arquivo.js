function calcular(){
    let veloscidade=document.getElementById('idvel')
    let resposta=document.getElementById('resposta')
    resposta.style.color = 'red'
    let valor=Number(veloscidade.value)
    if(valor>0){
        if(valor>80){
            resposta.innerHTML='<Strong>Multado!! </Strong> Veículo excedo o limite de veloscidade'
        }else{
            resposta.innerHTML='valor dentro do límite de veloscidade! prossiga'
        }
    }else{
        alert('Adicione um valor válido')
    }
}