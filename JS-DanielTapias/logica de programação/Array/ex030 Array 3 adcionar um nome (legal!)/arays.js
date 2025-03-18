let nomes = ["João", "Maria", "Daniel", "Beatriz", "Esther", "juliana"]

let nomeDigitado = prompt("digite o seu nome")

nomes[nomes.length] = nomeDigitado

for(i = 0; i < nomes.length; i++){
    document.write("Nomes "  + nomes[i] + "<br>")


}

document.write("A lista de nomes possui: " + nomes.length + " elementos")