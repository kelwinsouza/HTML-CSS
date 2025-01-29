var corFavorita ='vermelho';

switch (corFavorita) { 
    case 'azul':
        console.log('Olhe para o céu.');
        break;
    case 'vermelho':
        console.log('Olhe para rosas.');
        break;  
    case 'verde':
        console.log('Olhe para a floresta.');
        break;
        default:
        console.log('Feche os olhos.');
    }
    // Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 32;
var idadeParente = 32;

if(minhaIdade > idadeParente) {
    console.log('É maior');  
}
else if (minhaIdade < idadeParente) {
    console.log('É menor');
}
else {
    console.log('É igual');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - 's') && (5 - 2);
console.log (expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//true
var idade = 28;//true
var possuiDoutorado = false;//false
var empregoFuturo;//false
var dinheiroNaConta = 0;//false

console.log (!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if ( brasil > china){
    console.log ( 'brasil é maior que china');
} else{
    console.log ('brasil é menor que china');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}