const numeros = [2, 3, 5, 6, 2, 1, 0, 9]

let soma = 0
for(let i = 0; i < numeros.length; i++){
    let n = numeros[i]
    if(n % 2 !== 0){
        soma += n
    }
    
}
alert(" a soma dos impares é " + soma)