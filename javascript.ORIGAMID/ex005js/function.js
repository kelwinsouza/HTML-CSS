
function mostraConsole(){
    console.log('oii')
}
addEventListener('click', mostraConsole);


//addEventListener('click', function(){console.log('oi')});

function corFavorita(cor){
    if(cor === 'azul') {
        return 'você gosta do céu';
    } else if ( cor === 'verde'){
        return 'eu gosto de floresta'
    }else {
        return 'você não gosta de nada';
    }
}

function imc ( peso, altura){

    var imc = peso / (altura * altura);
    return imc;
}
console.log( imc (80, 1.80));

function areaQuadrado (lado) {
    return lado * lado;
}

console.log (areaQuadrado(10));

function pi(){
 return 3.14;
}
var total = 6 * pi ();

console.log (pi());

function terceiraIdade(idade){
    if(idade >= 60){
        console.log('é idoso');
    }
    console.log(idade)
}
terceiraIdade(60)

function terceiraIdade2(idade){
    console.log( idade);
    if( idade !== 'number'){
        return 'Por favor preencha um numero'
    }
    if(idade >= 61){
        return 'verdadiro';
    }else {
        return false;
    }
}
console.log(terceiraIdade2('oiii'))


function visiTei(paisesVisitados) {
    var totalPaises = 193;
    return `faltam visitar ${totalPaises - paisesVisitados} paises`;
}

var profissao = 'Tecnico de Tacográfos.';
function dados() {
    var nome = 'kelwin';
    var idade = 32;
    function outrosDados(){
        var endereco = 'rua são joaquim canoas';
        var idade = 33;
        return `${nome}, ${idade},${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());