const aluno = [
    { nome: "Daniel", notas: [1,3,3,8]},
    { nome: "Maria", notas: [10,5,9,8] },
    { nome: "João", notas: [10,6,3,0] },
    { nome: "kelwin", notas:[10,10,10,10]}
]

    const listaAlunos = document.getElementById("listaAlunos")
    let alunosHTML = " "
    for(let i = 0; i < aluno.length; i++){
        alunosHTML += "<li>" + aluno[i].nome
        alunosHTML += "<ul>"
        for(let j = 0; j < aluno[i].notas.length; j++)

        alunosHTML += "<li>" + aluno[i].notas[j] + "</li>"
        alunosHTML += "</ul>"
        alunosHTML += "</li>"
    }


    listaAlunos.innerHTML = alunosHTML