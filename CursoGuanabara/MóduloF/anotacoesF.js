/*                                                                              VARIÁVEIS COMPOSTAS
 - As variáveis compostas são os Arrays ou Vetores em PT-br.
 - Nesse tipo de variável é determinado pelo programador a quantidade de espaços que terá. 
 - É salvo mais de uma informação nessas variáveis.
 - O nome dado ao que é guardado dentro dessa variável é: ELEMENTO. 
 - Elemento: Guarda espaço da memória, Guarda o valor colocado dentro dele e o Índice */

/* Declaração de Arrays

 - let num = [1 ,2 ,3]
    console.log(`Meu array é: ${num}`)

 - Será mostrado na tela os números do Array
 
 - Para que se aumente o array, basta: 

 - let num = [1, 2, 3]
    num [3] = 4
    console.log(`Meu array é: ${num}`)
 
 - Mesmo que seja declarado um array, como no exemplo acima de três espaços, e você precisar adicionar mais um espaço, basta pegar o nome da variável e entre
    colchetes adicionar o índice para onde determinado elemento seja adicionado.
    
 - PUSH: Em JavaScript podemos também adicionar de uma outra forma, basta pegar o nome da variável, seguido de .push e entre parênteses o nome do elemento que você quer adicionar. 
 
 - let num = [1, 2, 3]
    num.push(4)
    console.log(`Meu array é: ${num}`)
    
 - LENGTH: Para saber o comprimento de um vetor, basta pegar o nome da variável seguido de .length e para o JavaScript não existe o (), após o length.
           Para saber a posição de determinado vetor, basta colocar o nome da variável, seguido de (variavel[0])

           .length
 - let num = [1, 2, 3, 4]
      num.push(5)
      console.log(`Meu array é: ${num}`)
      console.log(num.length)

           (variável[0])
 - let num = [4, 2, 1, 3]
      num.push(5)
      console.log(`Meu array é: ${num}`)
      onsole.log(`E o array no índice 0 é: ${num[0]}`)
           
      
 - SORT: Para colocar um array em ordem crescente, basta colocar o nome da variável, seguido de .sort()
 
 - let num = [4, 2, 1, 3]
      num.push(5)
      console.log(`Meu array é: ${num}`)
      console.log(`E o array em ordem crescente é: ${num.sort()}`)
      
 - Para saber se existe determinado valor em um ARRAY basta utiliar a variával do ARRAY seguido de .indexOf(valor).

 - Se o valor não existir irá retornar o -1.
 
 - let num = [1, 2, 3, 4, 5]
   for(let contador in num){
    console.log(`A posição ${contador} tem o valor: ${num[contador]}`)
}
   console.log(num.indexOf(1)) */ 

/* FOR APENAS PARA ARRAYS e OBJETOS

 - Em JavaScript existe um tipo de FOR simplificado em que só basta declarar a variável que será contado juntamente com a variável do array ou objeto.

 - let num = [1, 2, 3, 4, 5]
   for(let contador in num){
    console.log(num[contador])
}

 - for == para ; in == em 

*/










/*                                                                       FUNÇÔES
 - DEFINIÇÃO: São AÇÕES executadas assim que são CHAMADAS ou em decorrência de algum EVENTO. 
 -            Uma FUNÇÃO pode receber PARÂMETROS e retornar um RESULTADO.
 - Toda função pode ter os seguintes fatores: Chamada, Parâmetro, Ação, Retorno. 
 - Toda função pode ter ou não Parâmetros e Retorno 
 - Uma função em JavaScript no código pode ter vários retornos mas apenas um será executado.
 

 - function ação(parâmetro){
   
   return res
 }
 ação(5 == parâmetro real)

- function parimp(num){
   if(num % 2 == 0){
       return 'Par'
   } else {
       return 'Impar'
   }
}
let res = parimp(11)
console.log(res)

- Uma variável pode receber uma função em JavaScript

- let valor = function(num){
    return num * 2
}
console.log(valor(4))

 - Para se calcular o fatorial de um número fazemos das seguintes formas

 - Forma Recursiva: Onde a função chama ela mesma 

 - function fatorial(num){
    if(num == 1){
        return 1
    } else{
        return fatorial = num * fatorial(num-1)
    }
}
console.log(fatorial(5))


*/
