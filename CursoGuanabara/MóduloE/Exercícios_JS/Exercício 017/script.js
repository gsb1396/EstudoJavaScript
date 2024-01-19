function contar(){
    let inicio = window.document.querySelector('input#inicio')
    let fim = window.document.querySelector('input#fim')
    let passo = window.document.querySelector('input#passo')
    let resultado = window.document.querySelector('div#resultado')
    let inicioNum = Number(inicio.value)
    let fimNum = Number(fim.value)
    let passoNum = Number(passo.value)
    if(inicioNum == 0 || fimNum == 0 || passoNum == 0){
        window.alert('[ERRO] FALTAM DADOS')
    } else {
        for(let contador = inicioNum ; contador <= fimNum ; contador += passoNum){
            resultado.innerHTML += `${contador}`
        }
    
    }
    
    
}