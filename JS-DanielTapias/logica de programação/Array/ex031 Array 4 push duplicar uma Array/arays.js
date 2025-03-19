let numeros = [4, 8 , 2 , 28 , 100 , 7, 5 , 6, 35, 12 ]
let numeros2 =[  ]

for(let i = 0; i < numeros.length; i++){
   let numero =  numeros[i] * 2

   numeros2[numeros.length] = numero

   numeros2.push(numero) // empurra um novo valor no final do array
}

console.log(numeros2)