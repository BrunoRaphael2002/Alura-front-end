
function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio);

  

   if(elemento != null && elemento.localName === 'audio'){
     elemento.play();
   }else{
    console.log('Elemento não encontrado');
   }


    
    
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
for(let i = 0; i < arrayDeTeclas.length ; i++){



    const tecla = arrayDeTeclas[i];

    const instrumentos = tecla.classList[1];


  
    const idAudio = `#som_${instrumentos}`;
    
       tecla.onclick = function (){
        tocaSom(idAudio);
       
    }

       tecla.onkeydown = function(evento){
        console.log(evento.code =='Space' || evento.code === 'Enter');

        if(evento.code ==='Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
       }
       
       tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
       }

       
    
}




