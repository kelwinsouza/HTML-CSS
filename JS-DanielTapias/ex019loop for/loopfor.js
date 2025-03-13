let n = parseFloat(prompt("digite um número"))

if (!isNaN(n)) {
for (let i = 0; i <= 1000; i++){
        document.write( n + " x " + i + " = " + i + "<br>")
        i++}
    document.write("fim do loop")
    
        }else {
        alert("digite apenas números")
        
}