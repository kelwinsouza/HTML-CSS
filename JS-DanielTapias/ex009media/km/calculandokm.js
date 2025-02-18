let cidades = {
    "porto alegre": 0,
    "glorinha":45,
    "caraa":90
};

let cidade1 = prompt("Digite a primeira cidade:").toLowerCase();
let cidade2 = prompt("Digite a segunda cidade:").toLowerCase();

let distancia = Math.abs(cidades[cidade1] - cidades[cidade2]);

alert("A distancia entre " + cidade1 + " e " + cidade2 + "é de  " + distancia + "km.")

