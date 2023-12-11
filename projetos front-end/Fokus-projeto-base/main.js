//01-Mudar o background pela tag html
//02-Criar a funcionalidade dos botões



const tagHtml = document.querySelector('html');

const manipulaImagem = document.querySelector('.app__image')

const botaoFoco = document.querySelector('.app__card-button--foco');

const botaoCurto = document.querySelector('.app__card-button--curto');

const botaoLongo = document.querySelector('.app__card-button--longo');

const botaoStartpause = document.querySelector('#start-pause');

const iniciarOuPausarBotao = document.querySelector(' #start-pause span');
//botões

const tempoNaTela = document.querySelector('#timer')

const iconePlayPause = document.querySelector('#start-pause img');

const titulo = document.querySelector('.app__title');

const listaDeBotoes = document.querySelectorAll('.app__card-button');

const inputChangeMusic = document.querySelector('#alternar-musica');


const modal =  document.querySelector('#modal');
const buttonClose =  document.querySelector('#modal button');

buttonClose.addEventListener('click', ()=>{
    modal.close()
   
})



// Nessa parte vai ser criado uma constante que é um Array de audios

const musica = new Audio('./sons/luna-rise-part-one.mp3');



let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

const playSound = new Audio('./sons/play.wav');
const pauseSound = new Audio('./sons/pause.mp3');
const beepSound = new Audio('./sons/beep.mp3');

let isPlaying = false;

musica.loop = true;




//variaveis fim

//interatividade dos botoes

inputChangeMusic.addEventListener('change', () =>{
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})







botaoFoco.addEventListener('click', () =>{
  // tagHtml.setAttribute('data-contexto', 'foco')
  // manipulaImagem.setAttribute('src', '/imagens/foco.png')
    tempoDecorridoEmSegundos = 0;
  alterarContexto('foco');
  botaoFoco.classList.add('active');



});

/* a lista de eventos deve ser adicionada ao botão e então
deve se criada uma função para manipular o elemento desejado.
Essas duas funções foram feitas de formas diferentes uma com 
arrow function que é a froma simplificada e outra normal
que é um pouco mais longa.
*/

botaoCurto.addEventListener('click', function(){
   //tagHtml.setAttribute('data-contexto', 'descanso-curto')
   //manipulaImagem.setAttribute('src', '/imagens/descanso-curto.png')
   tempoDecorridoEmSegundos = 300;
   alterarContexto('descanso-curto');
   botaoCurto.classList.add('active');
}
    
);

botaoLongo.addEventListener('click', ()=>{
  // tagHtml.setAttribute('data-contexto', 'descanso-longo')
   //manipulaImagem.setAttribute('src', '/imagens/descanso-longo.png')
   tempoDecorridoEmSegundos = 900;
   alterarContexto('descanso-longo');
   botaoLongo.classList.add('active');
})

//refatorando


//funcao: refatorando e simplificando o codigo
function alterarContexto(contexto){
    mostrarTempo()
    listaDeBotoes.forEach(function (contexto){
        contexto.classList.remove('active')
        //pesquiser sobres o metodos do classlist
    })
    tagHtml.setAttribute('data-contexto', contexto)
    manipulaImagem.setAttribute('src', `./imagens/${contexto}.png`)

    switch(contexto){
        case "foco":
            titulo.innerHTML=
                `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
                `
            break;

        case"descanso-curto":
        titulo.innerHTML=
                ` Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case"descanso-longo":
        titulo.innerHTML=
        ` Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>`

            break;

            case iniciarOuPausar:
            StereoPannerNode.innerHTML =
            `Pausar`

        default:
            console.log('sem Resultado');
            break;

    }

    

}

const contagemRegressiva = () =>{
    if(tempoDecorridoEmSegundos <= 0 ){
        modal.showModal()
        beepSound.play()
        const focoAtivo = tagHtml.getAttribute('data-contexto') == 'foco'
        if (focoAtivo) {
            const event = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(event)
        }
        zerar()
        return
    }
    tempoDecorridoEmSegundos--;
    mostrarTempo();
}

botaoStartpause.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar(){
    if(intervaloId/*se intervaloId tiver algum resultado execute essa função*/){
        zerar()
        
        pauseSound.play();
        return
    }
    playSound.play();
    intervaloId = setInterval(contagemRegressiva, 1000) 
    iniciarOuPausarBotao.textContent = 'Pausar';
    iconePlayPause.setAttribute('src','./imagens/pause.png')
    
        
   
}

function zerar (){
    clearInterval(intervaloId);
    iniciarOuPausarBotao.textContent = 'Começar';
    iconePlayPause.setAttribute('src','./imagens/play_arrow.png')
    pauseSound.play()
    intervaloId =null;
}

function mostrarTempo(){
   const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second:'2-digit'})
   
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();

// testando funcionalidade 

// se o botão ok for clicado então o som deve parar

buttonClose.addEventListener('click', () =>{
 
    beepSound.pause()
    
})

//funcionalidade aprovada














