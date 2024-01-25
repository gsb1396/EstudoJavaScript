function gerarTabuada(){
    let tabuada = window.document.querySelector('input#tabuada')
    let numTabuada = Number(tabuada.value)
    let option = document.createElement('option')
    let select = window.document.querySelector('select#selectTabuada')
    select.innerHTML = ''
    for(let c = 1 ; c <= 10 ; c++){
    option.text +=  ` ${numTabuada} x ${c} = ${c*numTabuada} ` 
    select.appendChild(option)
    
    }
}