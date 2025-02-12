let n1 = parseFloat(prompt("digite um número de 0 a 10"));
let n2 = parseFloat(prompt("digite outro número de 0 a 10"))

let media = (n1 + n2) / 2;

alert("está aprovado?" + (media > 4 && n1 > 0 && n2 > 0 ));