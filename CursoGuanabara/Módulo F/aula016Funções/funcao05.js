// REVISAR

function fatorial(num){
    if(num == 1){
        return 1
    } else{
        return fatorial = num * fatorial(num-1)
    }
}
console.log(fatorial(5))