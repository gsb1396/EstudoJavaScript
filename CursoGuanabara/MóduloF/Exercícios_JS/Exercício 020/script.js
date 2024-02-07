let num = window.document.querySelector('input#num')
let numLista = window.document.querySelector('select#numLista')
let numVetor = []

function adicionar(){
    numValor = Number(num.value)
    if(numValor < 1 || numValor > 100){
        window.alert('Favor digitar um número entre 1 e 100')
        return false
    }
    numVetor.push(numValor.value)
    let numItem = window.document.createElement('option')
    numItem.text = `${numValor}`
    numLista.appendChild(numItem)

    
}