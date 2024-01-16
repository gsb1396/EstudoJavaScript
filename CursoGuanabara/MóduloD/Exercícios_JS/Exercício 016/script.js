function verificar(){
    let ano = new Date()
    let anoSistema = ano.getFullYear()
    let nascimento = window.document.querySelector('input#nascimento1')
    let resultado = window.document.querySelector('div#resultado')
    let imagem = window.document.querySelector('img#imagem')
    let fsex = window.document.getElementsByName('sexo1')
    let idade = anoSistema - Number(nascimento.value)
    if(idade > 150 || nascimento == 0){
        window.alert('[ERRO]')
    }
    if(fsex[0].checked){        
        if(idade >= 0 && idade < 14){
            resultado.innerHTML = `Você é uma criança de ${idade} anos de idade`
            imagem.src = 'homemcriança.jpg'
        } else if(idade >= 14 && idade < 30){
            resultado.innerHTML = `Você é um homem jovem de ${idade} anos de idade`
            imagem.src = 'homemjovem.jpg'
        } else if(idade >= 30 && idade < 60){
            resultado.innerHTML = `Você é um homem adulto de ${idade} anos de idade`
            imagem.src = 'homemadulto.png'
        } else if(idade >=60 && idade < 150){
            resultado.innerHTML = `Você é um senhor de ${idade} anos de idade`
            imagem.src = 'homemvelho.jpg'
        }
    } else if(fsex[1].checked){
        if(idade >= 0 && idade < 14){
            resultado.innerHTML = `Você é uma criança de ${idade} anos de idade`
            imagem.src = 'mulhercriança.jpg'
        } else if(idade >=14 && idade < 30){
            resultado.innerHTML = `Você é uma mulher jovem de ${idade} anos de idade`
            imagem.src = 'mulherjovem.jpg'
        } else if(idade >= 30 && idade < 60){
            resultado.innerHTML = `Você é uma mulher adulta de ${idade} anos de idade`
            imagem.src = 'mulheradulta.jpg'
        } else if(idade >=60 && idade < 150){
            resultado.innerHTML = `Você é uma senhora de ${idade} anos de idade`
            imagem.src = 'mulhervelha.jpg'
        }
    }

}



