function carregar(){
    let msg = window.document.querySelector('div#msg')
    let imagem = window.document.querySelector('img#imagem')
    let horaSistema = new Date()
    let hora = horaSistema.getHours() 
    msg.innerHTML = `São exatamente ${hora} horas`
    if(hora > 0 && hora < 12){
        // Bom Dia
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#FFE761'
    } else if(hora >= 12 && hora < 18){
        //Boa Tarde
        imagem.src = 'fototarde.png'
        document.body.style.background = '#FC8E13'
    } else{
        //Boa Noite
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#262834'
    }
    

}