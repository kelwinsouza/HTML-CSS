let carro = { modelo: "Uno",
    ano : 2023,
    km: 10000,
    combustivel: "gasolina",
    listrosConsumidos: 625,
    marcaDocarro: "fiat"
}
document.write(` o carro ${carro.marcaDocarro } ${carro.modelo} ano ${carro.ano} fez em média ${ carro.km / carro.listrosConsumidos } Km/L de ${carro.combustivel}  `)    