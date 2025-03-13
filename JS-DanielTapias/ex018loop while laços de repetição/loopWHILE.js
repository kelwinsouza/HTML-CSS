//let n = parseFloat(prompt("digite um número"))
/*let n = 5
document.write(n + " x 0  =  " + n * 0 + "<br>")
document.write(n + " x 1  =  " + n * 1 + "<br>")
document.write(n + " x 2  =   " + n * 2 + "<br>")
document.write(n + " x 3  =   " + n * 3 + "<br>")
document.write(n + " x 4  =   " + n * 4 + "<br>")
document.write(n + " x 5  =   " + n * 5 + "<br>")
document.write(n + " x 6  =   " + n * 6 + "<br>")
só fiz isso pra testar
((isNaN(n)alert("digite apenas números")) ||


let n = parseFloat(prompt("digite um número"))
let contador = 0

while (contador <= 1000){
    document.write  (n + " x "  + contador + " = " + n * contador + "<br>")
    contador++

}

document.write("saiu do loop")*/

//em quanto o contador <= a 1000
//   faça isso

let n = parseFloat(prompt("digite um número"))

    if(!isNaN(n)){
        
        let contador = 0
        while ( contador <= 1000){
            document.write (n + "x" + contador + "=" + contador + "<br>")
        contador++
        }
        document.write("saiu do programa")

    }   else {
        alert("digite apenas número")
    }

