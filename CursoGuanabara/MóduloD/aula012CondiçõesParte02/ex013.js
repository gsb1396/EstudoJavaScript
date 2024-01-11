let horaSistema = new Date()

let hora = horaSistema.getHours()

console.log(`São exatamente ${hora} horas`)

if(hora >= 6 && hora < 12 ){
    console.log('BOM DIA!')
} else if(hora >=13 && hora < 18){
    console.log('BOA TARDE')
} else if(hora >= 18 && hora <= 24){
    console.log('BOA NOITE')
} else if(hora < 6 ){
    console.log('BOA MADRUGADA')
}