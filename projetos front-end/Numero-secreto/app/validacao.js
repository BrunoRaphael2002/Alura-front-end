//Validando dados da aplicação

function verificaSeOChutePossuiUmValorValido(chute) {

    const numeroRecebidoAPI = +chute //vai converter automaticamente para Number

    //Validando Dados:

    if ( chuteForInvalido(numeroRecebidoAPI)){
        elementoChute.innerHTML += `<div>valor Inválido</div>`;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numeroRecebidoAPI)){
      elementoChute.innerHTML += `<div>Valor invalido o valor deve ser entre ${menorValor} e ${maiorValor} </div>`;

    }

    if (numeroRecebidoAPI === numeroSecreto ){
        document.body.innerHTML = ` `
    }
    
}



function chuteForInvalido(numeroRecebidoAPI) {
    return Number.isNaN(numeroRecebidoAPI)
}

function numeroForMaiorOuMenorQueOValorPermitido(numeroRecebidoAPI) {
    return numeroRecebidoAPI > maiorValor || numeroRecebidoAPI <  menorValor
}
