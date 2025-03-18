let mensagem = "olá euu sou uma mensagem de 'texto'" 
console.log(mensagem);

console.log( typeof 0)
console.log(typeof "0")
console.log(typeof String(0))

console.log(Boolean("0"));//true
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(""));//false


let naoDeclarado =null
console.log(naoDeclarado)

naoDeclarado = 0
console.log(naoDeclarado)


let n =parseFloat("a")
console.log(n)
console.log(typeof n)
console.log("--------------------------")

console.log(typeof undefined)
console.log(typeof null)
console.log(typeof 0)
console.log(typeof "")
console.log(typeof true)

let str = "ba"
str += parseInt(str)
alert(str + "a")