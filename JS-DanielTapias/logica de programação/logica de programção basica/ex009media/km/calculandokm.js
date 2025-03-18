let cidades = {
    "porto alegre": {"glorinha": 55, "caraa": 95, "canoas": 21},
    "glorinha": {"porto alegre": 55, "caraa": 40, "canoas": 54},
    "caraa": {"porto alegre": 95, "glorinha": 40, "canoas": 85},
    "canoas": {"porto alegre": 21, "glorinha": 54, "caraa": 85}
};

function  calcularDistancia(){
let cidade1 = prompt("Digite a primeira cidade:").toLowerCase();
let cidade2 = prompt("Digite a segunda cidade:").toLowerCase();

let distancia = cidades[cidade1][cidade2];

alert("A distancia entre " + cidade1 + " e " + cidade2 + "é de  " + distancia + "km.")}

