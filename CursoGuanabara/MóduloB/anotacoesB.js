// Em JavaScript o símbolo '=' significa RECEBE

//  Pode declarar uma string com "", '' ou `` cada uma com sua determinada função

/* Identificadores (VARIÁVEIS)
 - Podem começar com letras, $ ou _
 - Não podem começar com números
 - É possível usar letras e números
 - É possível usar acentos e símbolos
 - Não podem conter espaços
 - Não podem ser palavras reservadas*/

/* Identificadores (VARIÁVEIS DICAS)
 - Maiúscula e Minúsaculas fazem diferença
 - Tente escolher nomes coerentes para as variáveis
 - Evite se tornar um 'programador alfabeto' ou 'programador contador'*/

/* Tipos Primitivos
 - Number
        Infinity
        Nan
 - String
 - Boolean
 - Null
 - Undefined
 - Object
        Array
 - Function     
 
 (E para identificar no código de qual tipo é usamos o: TYPEOF antes da declaração)*/

 //A concatenação em JavaScript funciona apenas com o sinal de +

 /* Conversão de String para Número
  - Number.parseInt(n) Para converter para números Inteiros
  - Number.parseFloat(n) Para converter para números Decimais
  - Number() Para conversão seja quaisquer número Inteiro ou Decimal*/

/* Conversão de Número para String
 - String(n) Converte qualquer número em uma String
 - n.toString() Converte qualquer número em uma String*/  

/* Para usar tempalte String que substitui a concatenação
 - `${}` Basta colocar a frase dentro da crase e o as variáveis colocar dentro das chaves*/ 

/* Formatando de String
 - s.lenght Mostra quantos caracteres a String tem
 - s.toUpperCase() Coloca a String toda em Maiúscula
 - s.toLowerCase() Coloca a String toda em minúscula*/ 

/* Formatando de Números
 - n1.toFixed(2) Para deixar o número com duas casas decimais
 - n1.toFixed(2).replace('.' , ',') Para deixar o número com duas casas decimais e trocar o ponto pela virgula
 - n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) Transforma o número em representação de salário*/  

/* Operadores Aritiméticos
 - + Adição
 - - Subtração
 - * Multiplicação
 - / Divisão Real
 - % Resto da Divisão
 - ** Potência*/

/* Ordem de precedência JS
 - () Parênteses
 - ** Potência
 - * / % Multiplicação / Divisão Real / Resto da Divisão. O que aparecer primeiro da esquerda para direita
 - + - Adição / Subtração*/ 

/* Incremento 
 - x++ Adciona 1 após a declaração
 - x-- Subtrai 1 após a declaração
 - ++x Adciona 1 antes da declaração
 - --x Subtrai 1 antes da declaração*/

/* Operadores Relacionais
 - > Maior
 - < Menor
 - >= Maior ou igual
 - <= Menor ou igual
 - == Igual
 - =! Diferente
 - === Identidade Verifica se os operadores são do mesmo valor e mesmo tipo
 - !== Desigual restrito Verifica se os operadores são diferentes de valor e tipo*/

/* Operadores Lógicos
 - ! Negação Todas as canetas menos azul
 - && Conjunção Caneta azul E vermelha
 - || Disjunção Caneta azul OU vermelha

 Ordem dos Lógicos. !true or false > && > ||
 
       Negação
 - !true FALSE
 - !false TRUE
 
       Conjunção
 - true && true TRUE
 - true && false FALSE
 - false && true FALSE
 - false && false FALSE 
 
       Disjunção
 - true || true TRUE
 - true || false TRUE
 - false || true TRUE
 - false || false FALSE*/

// Ordem de expressões. Aritiméticos > Relacionais > Lógicos 

/* Operadores Ternário
 - ? : 
       teste      ?    true    :    false     
 Ex: media >= 7.0 ? "Aprovado" : Reprovado*/ 


