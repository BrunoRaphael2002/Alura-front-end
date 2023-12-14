//Validando dados da aplicação

function verificaSeOChutePossuiUmValorValido(chute) {

    const numeroRecebidoAPI = +chute //vai converter automaticamente para Number

    //Validando Dados:

    if ( chuteForInvalido(numeroRecebidoAPI)){
        console.log('valor Inválido');
    }

    if(newFunction(numeroRecebidoAPI)){
        console.log('valor Inválido');

    }
    
}



function chuteForInvalido(numeroRecebidoAPI) {
    return Number.isNaN(numeroRecebidoAPI)
}

function newFunction(numeroRecebidoAPI) {
    return numeroRecebidoAPI > maiorValor || numeroRecebidoAPI < maiorValor
}
