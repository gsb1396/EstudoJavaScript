// REFAZER

let num = window.document.querySelector('input#num')
let numLista = window.document.querySelector('select#numLista')
let numResultado = window.document.querySelector('div#resultado')
let numVetor = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, numVetor)){
        numVetor.push(Number(num.value))
        let numItem = window.document.createElement('option')
        numItem.text = `${num.value}`
        numLista.appendChild(numItem)
        numResultado.innerHTML = ''
        numResultado.innerHTML = `Processando resultados`
    }else {
        window.alert(`Valor inválido ou já encontrado na lista`)
    }
    num.value = ''
    num.focus()
    
}

function finalizar(){
    if(numVetor.length == 0){
        window.alert('Adicione Valores antes de Finalizar')
    } else {
        let numTotal = numVetor.length
        let numMaior = numVetor[0]
        let numMenor = numVetor[0]
        let numSoma = 0
        let numMedia = 0
        for(let pos in numVetor){
            numSoma += numVetor[pos]
            if(numVetor[pos] > numMaior)
                numMaior = numVetor[pos]
            if(numVetor[pos] < numMenor)
                numMenor = numVetor[pos]
        }
        numMedia = numSoma / numTotal
        numResultado.innerHTML = ''
        numResultado.innerHTML = `<p>${numTotal}</p>`
        numResultado.innerHTML += `<p>${numMaior}</p>`
        numResultado.innerHTML += `<p>${numMenor}</p>`
        numResultado.innerHTML += `<p>${numSoma}</p>`
        numResultado.innerHTML += `<p>${numMedia}</p>`
    }
}

// function adicionar(){
//     numValor = Number(num.value)
//     if(numValor < 1 || numValor > 100){
//         window.alert('Favor digitar um número entre 1 e 100')
//         return false
//     }
//     if(numVetor.length == 10){
//         window.alert('Número já adicionado')
//     }    
//     numVetor.push(numValor.value)
//     let numItem = window.document.createElement('option')
//     numItem.text = `${numValor}`
//     numLista.appendChild(numItem)
//     numResultado.innerHTML = `Processando resultados`
//     numResultado.innerHTML = `Em Ordem Crescente é: ${numVetor.sort()}`
// }


