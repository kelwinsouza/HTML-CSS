/*let n1 = parseFloat(prompt("digite um numero de 0 a 10"))
let n2 = parseFloat(prompt("digite um núero de 0 a 10"))

if (isNaN(n1) || isNaN(n2)) {
    alert("digite apenas números não letras.")

}
else if (n1 <= 10 && n2 <= 10 && n1 >= 0 && n2 >= 0) {
        alert("APROVADO!")
}
else {
    alert("digite apenas numeros de 0 a 10")
}


   }*/
    let n1 = parseFloat(prompt("digite um numero de 0 a 10"))
    let n2 = parseFloat(prompt("digite um núero de 0 a 10"))

  if (n1 <= 10 && n2 <= 10 && n1 >= 0 && n2 >= 0 && isNaN(n1) && isNaN(n2))
          
 {
         alert("APROVADO!")
    }else  {
        alert("Digite apenas números Entre 0 e 10")
    }


//isNan(parseInt(a)) vai ser true
//!isNan(parseInt(a)) vai ser false

//isFinite(parseInt(a)) vai ser false