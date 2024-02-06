function fatorial(num){
    let fat = 1
    for(let contador = num ; contador > 1 ; contador--){
        fat *= contador
    }
    return fat

}

console.log(fatorial(5))