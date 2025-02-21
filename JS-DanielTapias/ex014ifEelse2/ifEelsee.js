function calcular(){
    let n1 = parseFloat(prompt("digite um número:"))
    let n2 = parseFloat(prompt("digite outro número:"))
    
    //let media = (n1 && n2) 
    
    if(n1 <= 10 && n2 <= 10 && n1 >=0 && n2 >= 0) {
        
        let media = (n1 + n2) / 2
        if(media > 4 && n1 > 0 && n2 > 0){

            alert("aprovado")
        }else {
            alert("reprovadooo")
        }
    } else  {
        alert("Digite apenas números Entre 10")
    }
    }