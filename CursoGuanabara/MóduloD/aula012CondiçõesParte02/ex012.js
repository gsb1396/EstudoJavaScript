let idade = 22

console.log(`Você tem ${idade} anos de idade`)

if(idade < 16){
    console.log('Você ainda não tem idade para votar')
} else if(idade < 18 || idade >= 65){
    console.log('O seu voto é OPCIONAL')
} else{
    console.log('O seu é voto OBRIGATÓRIO')
}