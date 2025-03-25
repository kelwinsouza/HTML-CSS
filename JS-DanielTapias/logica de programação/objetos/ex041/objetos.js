const endereco ={
    logadouro: "Rua: são joaquin ",
    numero: 548,
    cep: 90250264
}

const pessoa ={
    nome: "João",
    sobreNome: "Dória",
    endereco
}


document.write(` O ${pessoa.nome} mora em ${pessoa.endereco.logadouro}, número ${endereco.numero} no cep ${endereco.cep} `)

for(let prop in pessoa ){
    console.log(prop)
    console.log(pessoa[prop])
}