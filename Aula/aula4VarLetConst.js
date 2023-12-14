// VAR primeira que surgiu e funciona praticamente em todo o código

// var comprimento = 2
// var altura = 3 

// console.log(comprimento * altura)

// LET Surgiu a partir da versão 2015 do JavaScript, para resolver problemas com variáveis em VAR. Let só pode ser usado, depois da variável declarada. 
// Como um programa possui muitos blocos, o let serve para que não se mexa no valor que foi colocado nela. 

// let forma = 'retângulo'
// let comprimento = 2
// let altura = 3
// let area

// if(forma === 'retângulo'){
//     area = altura * comprimento
// }else{
//     area = (altura * comprimento) / 2
// }
// console.log(area)

// CONST Ela é uma constante, uma vez adicionada ao programa não pode ser alterado. Sempre precisa ter um valor atrelado a variável

const forma = 'quadrado'
const comprimento = 2 
const altura = 3 
let area

if(forma === 'quadrado'){
    area = altura * comprimento
}else{
    area = (altura * comprimento) / 2
}
console.log(area)