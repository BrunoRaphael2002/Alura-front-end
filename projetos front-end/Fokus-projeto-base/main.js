//01-Mudar o background pela tag html
//02-Criar a funcionalidade dos botões



const tagHtml = document.querySelector('html');

const manipulaImagem = document.querySelector('.app__image')

const botaoFoco = document.querySelector('.app__card-button--foco');

const botaoCurto = document.querySelector('.app__card-button--curto');

const botaoLongo = document.querySelector('.app__card-button--longo');




botaoFoco.addEventListener('click', () =>{
  // tagHtml.setAttribute('data-contexto', 'foco')
  // manipulaImagem.setAttribute('src', '/imagens/foco.png')

  alterarContexto('foco')



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
}
    
);

botaoLongo.addEventListener('click', ()=>{
  // tagHtml.setAttribute('data-contexto', 'descanso-longo')
   //manipulaImagem.setAttribute('src', '/imagens/descanso-longo.png')
   alterarContexto('descanso-longo')
})

//refatorando

function alterarContexto(contexto){
    tagHtml.setAttribute('data-contexto', contexto)
    manipulaImagem.setAttribute('src', `/imagens/${contexto}.png`)

}










