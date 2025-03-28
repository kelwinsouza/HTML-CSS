window.onload = function() {
    const alunos = [
        { nome: "Daniel", notas: [1, 3, 3, 8] },
        { nome: "Maria", notas: [10, 5, 9, 8] },
        { nome: "João", notas: [10, 6, 3, 0] },
    ];

    const listaAlunos = document.getElementById("listaAlunos");
    let alunosHTML = "";

    for (let i = 0; i < alunos.length; i++) {
        let soma = 0;

        for (let j = 0; j < alunos[i].notas.length; j++) {
            soma += alunos[i].notas[j];
        }

        let media = soma / alunos[i].notas.length;

        // Adiciona nome e média ao HTML de forma correta
        alunosHTML += `<li>${alunos[i].nome}, Média: ${media.toFixed(2)}</li>`;
    }

    // Atualiza o conteúdo da lista
    listaAlunos.innerHTML = alunosHTML;
};