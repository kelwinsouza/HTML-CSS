function calcular(){
    let n1 = parseFloat(prompt("digite um número:"))
    let n2 = parseFloat(prompt("digite outro número:"))
    
    if(n1 <= 10 && n2 <= 10 && n1 >=0 && n2 >= 0) {
        alert("APROVADO!")
    }else  {
        alert("Digite apenas números Entre 0 e 10")
    }
}