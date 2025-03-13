
// jogue um dado e guarde o número

//jogue o outro dado e guarde o número

// crie o contador = 0

//enquanto dado1 for diferente do dado2
// some um ao contador
//jogue novamente os dados

//mostre qual número se repetiu e quantas vezes os dados foram jogados.


/*vamos simular dois dados ( 1 - 6 ) 

quantas vezes seia necessario 
jogar os dois dados até que os dois números saiam reptidos */



let dado1 = parseInt(Math.random() * 6 + 1)
let dado2 = parseInt(Math.random() * 6 + 1)
 dado1 = 2
 dado2 = 2
let contador = 1

while(dado1 !== dado2) {
    console.log(dado1, dado2)
    contador++
    dado1 = parseInt(Math.random() * 6 + 1)
    dado2 = parseInt(Math.random() * 6 + 1)
}
console.log("Os dados foram jogados " + contador + " vezes. E o número repetido foi o " + dado1)

console.log("-------------")

dado1 = parseInt(Math.random() * 6 + 1)
dado2 = parseInt(Math.random() * 6 + 1)

dado1 = 2
dado2 = 2
contador = 1

do{
    console.log(dado1, dado2)
    contador++
    dado1 = parseInt(Math.random() * 6 + 1)
    dado2 = parseInt(Math.random() * 6 + 1)
}while(dado1 !== dado2)
    console.log("Os dados foram jogados " + contador + " vezes. E o número repetido foi o " + dado1)