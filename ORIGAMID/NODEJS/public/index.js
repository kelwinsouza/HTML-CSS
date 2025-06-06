function getBlocos() {
  return JSON.parse(localStorage.getItem('blocos')) || {};
}

function salvarBlocos(blocos) {
  localStorage.setItem('blocos', JSON.stringify(blocos));
}

function criarBloco() {
  const input = document.getElementById('novoBloco');
  const nome = input.value.trim();

  if (!nome) return alert("Digite um nome para o bloco.");

  const blocos = getBlocos();

  if (blocos[nome]) return alert("Esse bloco já existe.");

  blocos[nome] = [];
  salvarBlocos(blocos);
  input.value = '';
  listarBlocos();
}

function listarBlocos() {
  const lista = document.getElementById('listaBlocos');
  const blocos = getBlocos();

  lista.innerHTML = '';

  for (let nome in blocos) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="bloco.html?bloco=${encodeURIComponent(nome)}">${nome}</a>`;
    lista.appendChild(li);
  }
}

listarBlocos();
