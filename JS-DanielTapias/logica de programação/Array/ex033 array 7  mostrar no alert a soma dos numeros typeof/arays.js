const numero = [2, undefined, 31, null, 0, "qualquer texto", 12, 55, 17, 36,[], 85, 68]

let soma = 0

for(let i = 0; i < numero.length; i++){
    let n = numero[i]
    if(typeof n ===  "number"){
        soma = soma + n
    }
}
alert("A soma de todos os números é: " + soma)
