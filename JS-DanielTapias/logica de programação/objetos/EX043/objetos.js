const pessoas = [
    {nome: "daniel", Email: "daniel@server.com"},
    {nome: "maria", Email: "maria@server.com"},
    {nome: "joão", Email: "joão@server.com"}
]
const listaPessoas = document.getElementById("listaPessoas")
for(let i = 0; i < pessoas.length; i++){
console.log(pessoas[i].Email)
listaPessoas.innerHTML += "<li>" + pessoas[i].nome +": "+ pessoas[i].Email + "</li>"
}