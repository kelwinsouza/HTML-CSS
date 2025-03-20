const numeros = [null, 2, 3, 5, 6, 2, 1, 0, 9]
let encontrou = false

for(let i = 0; i < numeros.length; i++){
    let n = numeros[i]
    if (n === null || n === undefined || isNaN(n)){ encontrou = true
        break
    }
}
alert("Encontrou null, undefind ou NaN? " + encontrou )