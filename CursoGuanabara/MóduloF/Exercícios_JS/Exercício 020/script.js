function adicionar(){
    let num = window.document.querySelector('input#num')
    numValor = Number(num.value)
    if(numValor < 1 || numValor > 100){
        window.alert('Favor digitar um número entre 1 e 100')
    } 
}