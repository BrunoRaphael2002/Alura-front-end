//01-Mudar o background pela tag html
//02-Criar a funcionalidade dos botões



const tagHtml = document.querySelector('html');

const manipulaImagem = document.querySelector('.app__image')

const botaoFoco = document.querySelector('.app__card-button--foco');

const botaoCurto = document.querySelector('.app__card-button--curto');

const botaoLongo = document.querySelector('.app__card-button--longo');

const titulo = document.querySelector('.app__title');

const listaDeBotoes = document.querySelectorAll('.app__card-button');




botaoFoco.addEventListener('click', () =>{
  // tagHtml.setAttribute('data-contexto', 'foco')
  // manipulaImagem.setAttribute('src', '/imagens/foco.png')

  alterarContexto('foco')
  botaoFoco.classList.add('active')



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
   alterarContexto('descanso-curto')
   botaoCurto.classList.add('active')
}
    
);

botaoLongo.addEventListener('click', ()=>{
  // tagHtml.setAttribute('data-contexto', 'descanso-longo')
   //manipulaImagem.setAttribute('src', '/imagens/descanso-longo.png')
   alterarContexto('descanso-longo')
   botaoLongo.classList.add('active')
})

//refatorando

function alterarContexto(contexto){
    listaDeBotoes.forEach(function (contexto){
        contexto.classList.remove('active')
        //pesquiser sobres o metodos do classlist
    })
    tagHtml.setAttribute('data-contexto', contexto)
    manipulaImagem.setAttribute('src', `/imagens/${contexto}.png`)

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

        default:
            console.log('sem Resultado');
            break;

    }

}


 
   











