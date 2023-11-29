
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
    
}



const arrayDeTeclas = document.querySelectorAll('.tecla');


//enquanto
/*

let i = 0;

while(i < arrayDeTeclas){

    const tecla = arrayDeTeclas[i];

    const instrumentos = tecla.classList[1];


    
    const idAudio = `#som_${instrumentos}`;
    
       tecla.onclick = function (){
        tocaSom(idAudio);
       }
    

       

       
    
}
*/ 


//para
for(let i = 0; i  < arrayDeTeclas.length ; i++){

    const tecla = arrayDeTeclas[i];

    const instrumentos = tecla.classList[1];


  
    const idAudio = `#som_${instrumentos}`;
    
       tecla.onclick = function (){
        tocaSom(idAudio);
       
    }

       tecla.onkeydown = function(evento){
        console.log(evento.code =='Space' || 'Enter');

        if(evento.code ==='Space' || 'Enter'){
            tecla.classList.add('ativa');
        }
       }
       
       tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
       }

       
    
}




