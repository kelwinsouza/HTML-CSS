const input = document.getElementById("number")
const output = document.getElementById("output")

let tabuadaHTML= ""

function mostrarTabuada() {
    const inputvalue = input.value;
    let tabuadaHTML = ""; 

    for(let i = 1; i <= 100; i++){
        tabuadaHTML += `${inputvalue} x ${i} = ${inputvalue * i} <br>`	
    }
    output.innerHTML = tabuadaHTML;

}
function limparInputs(){
    output.innerHTML = ""
    input.value = ""
}
