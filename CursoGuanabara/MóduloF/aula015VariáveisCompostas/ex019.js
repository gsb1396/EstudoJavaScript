// let num = [1, 2, 3, 4, 5]
// for(contador = 0 ; contador < num.length ; contador++){
//     console.log(`A posição do ${contador} do vetor é: ${num[contador]}`)
// }

let num = [1, 2, 3, 4, 5]
for(let contador in num){
    console.log(`A posição ${contador} tem o valor: ${num[contador]}`)
}
console.log(num.indexOf(5)) 