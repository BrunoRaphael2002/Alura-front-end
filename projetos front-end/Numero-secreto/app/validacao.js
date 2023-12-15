//Validando dados da aplicação

function verificaSeOChutePossuiUmValorValido(chute) {

    const numeroRecebidoAPI = +chute //vai converter automaticamente para Number

    //Validando Dados:

    if ( chuteForInvalido(numeroRecebidoAPI)){
        elementoChute.innerHTML += `<div>valor Inválido</div>`;
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numeroRecebidoAPI)){
      elementoChute.innerHTML += `<div>Valor invalido o valor deve ser entre ${menorValor} e ${maiorValor} </div>`;
      return

    }

    if (numeroRecebidoAPI === numeroSecreto ){
        document.body.innerHTML = ` <h2>Você acertou!</h2>
        <h3>O Numéro secreto era ${numeroSecreto}</h3>
        <button class='btn-jogar' id = 'jogar-novamente'>Jogar Novamente</button>
        `

    }else /* senao se  */ if(numeroRecebidoAPI >  numeroSecreto ){
        /* > maior que */ 
        elementoChute.innerHTML += ` <div>O Numero Secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
       
        `
    }else{
        elementoChute.innerHTML += ` <div>O Numero Secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

    
}

recognition.addEventListener('end' , () =>{
    recognition.start()
})



function chuteForInvalido(numeroRecebidoAPI) {
    return Number.isNaN(numeroRecebidoAPI)
}

function numeroForMaiorOuMenorQueOValorPermitido(numeroRecebidoAPI) {
    return numeroRecebidoAPI > maiorValor || numeroRecebidoAPI <  menorValor
}


document.body.addEventListener('click', event => {
    const botaoJogarNovamente = document.getElementsByClassName('btn-jogar');
    if(event.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})