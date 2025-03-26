const produtos = [
    {nome: "canta", preco: 2, estoque: 3 },
    {nome: "lapis", preco: 1.5, estoque: 4 },
    {nome: "borracha", preco: 0.75, estoque: 0 }
]

const tabelaProdutos = document.getElementById("tabelaProdutos")
for(let i = 0; i < produtos.length; i++){
    tabelaProdutos.innerHTML +=`
        <tr>
        <td>${produtos[i].nome}</td>
        <td> R$ ${produtos[i].preco.toFixed(2)}</td>
        <td>${produtos[i].estoque}</td>
        </tr>
    
    
    
    `
}