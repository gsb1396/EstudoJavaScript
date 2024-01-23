function gerarTabuada(){
    let tabuada = window.document.querySelector('input#tabuada')
    let numTabuada = Number(tabuada.value)
    let resultado = window.document.querySelector('div#resultado')
    resultado.innerHTML = ''
    for(let c = 1 ; c <= 10 ; c++){
        resultado.innerHTML += `<p> ${numTabuada} x ${c} = ${c*numTabuada} <p>>`
    }
}