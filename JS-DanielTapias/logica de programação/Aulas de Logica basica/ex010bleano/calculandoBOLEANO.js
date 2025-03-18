function calcular(){
    let n1 = parseFloat(prompt("Digite a nota 1"))
    let n2 = parseFloat(prompt("digite a nota 2"))
    
    let media =(n1 + n2) / 2
    
    alert("Está aprovado? " + (media > 4 && n1 > 0 && n2 > 0))
    
    }