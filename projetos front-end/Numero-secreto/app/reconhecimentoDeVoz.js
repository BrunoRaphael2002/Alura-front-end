const elementoChute = document.getElementById('chute');

//utilizando a API

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  //Criando e configurando o Reconhecimento de voz

  recognition.lang = 'pt-br';
  recognition.start() ;

  recognition.addEventListener('result' , onSpeak)

  function onSpeak (event){
    let chute = event.results[0][0].transcript
    exibeChuteNaTela(chute)

  }

  function exibeChuteNaTela (chute){

    chute = chute.trim(); // Remover espaços em branco no início e no final
    chute = chute.replace(/\.$/, '');
 
    console.log(chute);
    elementoChute.innerHTML = `<div>Você disse:</div><span class="box">${chute}</span>`;
   


 }
