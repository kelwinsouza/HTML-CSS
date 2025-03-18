
let quantasVezesdadosJogados = 1
let quantasVezesAsomaehPar = 0

while(true){
    let dados1 = parseInt(Math.random() * 6) + 1
    let dados2 = parseInt(Math.random() * 6) + 1
    
    console.log(dados1, dados2, quantasVezesdadosJogados, quantasVezesAsomaehPar)
    quantasVezesdadosJogados++

if(dados1 === dados2 ){
    continue
}



if( (dados1 + dados2) % 2 === 0) {
    quantasVezesAsomaehPar++
}

    if(quantasVezesAsomaehPar >= 10 ){
        break
    }
}
    console.log("Os dados foram jogados " + quantasVezesdadosJogados + "vezes" )