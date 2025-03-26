const aluno = {
    nome: "Daniel Morales",
    notas: [1,3,5,8]
}

const output = document.getElementById("output")
output.innerHTML = "<h2>Aluno:" + aluno.nome + "</h2>"
output.innerHTML += "<h2>notas:" + aluno.notas + "</h2>"
output.innerHTML += "<ul>"
let soma = 0
for(let i = 0; i < aluno.notas.length; i++){
    soma = aluno.notas[i]
    output.innerHTML += "<li>" + aluno.notas[i] +  "</li>"
}
    let media = soma / aluno.notas.length

    output.innerHTML += "</ul>"

    output.innerHTML += "<p> Media: " + media + "</p>" 

    let aprovado = null

    if(media >=  7){
        aprovado = "sim"
    } else{
        aprovado = "não"
    }
    output.innerHTML += "Aprivado? " + aprovado