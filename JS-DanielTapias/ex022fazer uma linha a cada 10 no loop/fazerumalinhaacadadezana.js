let n = parseInt(prompt("digite um numero"))

for(let i = 1; i <= 1000; i++){
    document.write(n + "x" + i + ": " + n * i + "<br>")
    if(i % 10 === 0){
        document.write("<hr>")
    }
}