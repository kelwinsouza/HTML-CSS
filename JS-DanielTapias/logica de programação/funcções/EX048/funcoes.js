const input = document.getElementById("number")
const output = document.getElementById("output")

    let tabuadaHTML = ""

function mostrarTabuada(){

    limparTabuada()
    const inputValue = parseFloat(input.value)
    for(let i = 1; i < 100; i++){
        tabuadaHTML += ` ${i} x ${inputValue} = ${i * inputValue} <br> `
    }

    output.innerHTML = tabuadaHTML
}   
    function limparTabuada(){
        tabuadaHTML =""
        output.innerHTML = ""
    }
    mostrarTabuada()