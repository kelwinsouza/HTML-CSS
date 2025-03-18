function calcular(){
let n1 = parseFloat(prompt("digite um número:"))
let n2 = parseFloat(prompt("digite outro número:"))

//let media = (n1 && n2) 

if(n1 <= 10 && n2 <= 10 ) { 
    alert("aprovado")
} else  {
    alert("Digite apenas números menores do que 10")
}
}