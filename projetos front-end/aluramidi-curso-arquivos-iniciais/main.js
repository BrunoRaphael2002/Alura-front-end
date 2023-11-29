
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
    
}



const arrayDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

//enquanto
while(i < arrayDeTeclas.length){

    const tecla = arrayDeTeclas[i];

    const instrumentos = tecla.classList[1];

    const idAudio = `#som_${instrumentos}`;
    
       tecla.onclick = function (){
        tocaSom(idAudio);
       }

        i++;

       
    
}




