//Validando dados da aplicação

function verificaSeOChutePossuiUmValorValido(chute) {

    const numeroRecebidoAPI = +chute //vai converter automaticamente para Number

    //Validando Dados:

    if ( chuteForInvalido(numeroRecebidoAPI)){
        console.log('valor Inválido');
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numeroRecebidoAPI)){
        console.log(`Valor invalido o valor deve ser entre ${menorValor} e ${maiorValor}`);

    }
    
}



function chuteForInvalido(numeroRecebidoAPI) {
    return Number.isNaN(numeroRecebidoAPI)
}

function numeroForMaiorOuMenorQueOValorPermitido(numeroRecebidoAPI) {
    return numeroRecebidoAPI > maiorValor || numeroRecebidoAPI < maiorValor
}
