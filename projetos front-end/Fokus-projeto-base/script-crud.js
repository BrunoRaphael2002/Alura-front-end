

const botaoAddTask = document.querySelector('.app__button--add-task');

const formularioAddTask = document.querySelector('.app__form-add-task ');

const textArea = document.querySelector('.app__form-textarea ');

const ulTarefas = document.querySelector('.app__section-task-list ');

const paragrafoDescricaoDaTarefa = document.querySelector('.app__section-active-task-description')

const removerConcluidas = document.querySelector('#btn-remover-concluidas')
const removeTodasTarefas = document.querySelector('#btn-remover-todas')


let listaDeTarefas = JSON.parse(localStorage.getItem('tarefas')) || [
    //lista de tarefas vai ser um Array vazio que recebe as tarefas
]

let tarefaSelecionada = null;
let liDatarefaSelecionada = null;




function atualizarTarefas (){
   
    localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas))/*
    Na função atualizarTarefas, você está usando localStorage.setItem('Tarefas', JSON.stringify(listaDeTarefas)). Note que você está usando 'Tarefas' como a chave, mas ao recuperar o valor, você está usando 'tarefas' (minúsculo). Isso pode causar problemas. Certifique-se de usar a mesma chave ao definir e obter do Local Storage.*/
}






function criarElementosDaTarefa(tarefa){ //depois de 15min caçando encontrei o erro
    //faltou colocar (tarefa) na função e a função  criarElementosDaTarefa estava escrito criarElementosDaTarefat por isso não mostrava na tela
    

    //é um meio de criar um trecho de codigo html usando classes
     //Id's e tags html muito similar ao React porém no React 
     //é muito mais simplificado (Menos codigo)

     const li = document.createElement('li')
     li.classList.add('app__section-task-list-item')

     const svg = document.createElement('svg')
     svg.innerHTML = ` 
     <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
         <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
     </svg>
 `

     const paragrafo = document.createElement('p')
     paragrafo.classList.add('app__section-task-list-item-description')
     paragrafo.textContent = tarefa.descricao

     const botao = document.createElement('button')
     botao.classList.add('app_button-edit')
    //debugger
     botao.onclick =() =>{
        const edicaoDaTarefa = prompt('adicone uma nova tarefa')
        

        if(edicaoDaTarefa != '' && edicaoDaTarefa != null){
            paragrafo.textContent = edicaoDaTarefa
            tarefa.descricao = edicaoDaTarefa
            atualizarTarefas()
        }
        
     }

     const imagemBotao = document.createElement('img')
     imagemBotao.setAttribute('src', './imagens/edit.png')
     botao.append(imagemBotao) //É como criar um container o .append coloca o  botao: <button>  <img> </button>
     li.append(svg)
     li.append(paragrafo)
     li.append(botao)


     if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete')
       botao.setAttribute('disabled' , 'disabled')
        
     }else{
     li.onclick = () =>{
           //Esse trecho de codigo  é util em navBar
    
        document.querySelectorAll('.app__section-task-list-item-active')
        .forEach(elemento => {
            elemento.classList.remove('app__section-task-list-item-active')
        })

      
     
        if (tarefaSelecionada == tarefa) {
            paragrafoDescricaoDaTarefa.textContent = ''
            tarefaSelecionada = null
            liDatarefaSelecionada = null
            return
        }
        tarefaSelecionada = tarefa
        liDatarefaSelecionada = li
        paragrafoDescricaoDaTarefa.textContent = tarefa.descricao
        li.classList.add('app__section-task-list-item-active')
       
     }
     }

     return li
    


}




botaoAddTask.addEventListener('click', ()=>{
    formularioAddTask.classList.toggle('hidden');
    //o metodo toggle é basicamente o if e else
})

// com esse trecho de codigo acima já é 
//possivel criar um menu 
//navbar hambúrguer responsivo

formularioAddTask.addEventListener('submit', (evento)=>{
    evento.preventDefault()//evita que a pagina seja recarregada(padrão)


   // const descricaoDaTarefa = textArea.value /*o .value pega o valor digitado pelo usuario . A constante  descricaoDaTarefa não será mais necessaria pois o objeto tarefa já vai coletar o valor digitado */

    const tarefa = {//criação de um objeto JavaScript]
        descricao: textArea.value

    }

    listaDeTarefas.push(tarefa)//push é um metodo nativo do array
    const elementoDaTarefa = criarElementosDaTarefa(tarefa)
    ulTarefas.append(elementoDaTarefa) 
    atualizarTarefas()
    textArea.value = ''
    formularioAddTask.classList.add('hidden');


    /* PUSH: Acrescenta novos elementos ao final de uma matriz e retorna o novo comprimento da matriz. basicamente ele acrensenta um item novo a lista então assim serião criados varias descrições de cada item da lista do formulario:

    0-estudar JavaScript
    1-estudar Matematica
    2-fazer o almoço 
    3-passar pano na Casa
    4-cuidar do bebê
    etc..

    e todos esses itens que o usuario adicionar vão ficar salvos em seu aparelho de modo local

    JSON.stringify(listaDeTarefas) esse trecho do codigo vai transformar os itens do array em String
     */
})

listaDeTarefas.forEach(tarefa => {
   const elementoTarefa = criarElementosDaTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});

//for each para cada item da lista de tarefas


//-------------------------------------------------------------

document.addEventListener('FocoFinalizado' , () => {
    if (tarefaSelecionada && liDatarefaSelecionada){

        liDatarefaSelecionada.classList.remove('app__section-task-list-item-active')

        liDatarefaSelecionada.classList.add('app__section-task-list-item-complete')

        liDatarefaSelecionada.querySelector('button').setAttribute('disabled' , 'disabled')

        tarefaSelecionada.completa = true
        
        atualizarTarefas()
       
    }
})

const removerTarefas = (somenteTarefasCompletas) =>{
   
       const seletor = somenteTarefasCompletas ? '.app__section-task-list-item-complete' : '.app__section-task-list-item'
       document.querySelectorAll(seletor).forEach( elemento =>{
            elemento.remove()
       }) 

       

       listaDeTarefas = somenteTarefasCompletas ? listaDeTarefas.filter(tarefa => !tarefa.completa  ) : []
       atualizarTarefas()
    
}

removerConcluidas.onclick = () => removerTarefas(true)

 removeTodasTarefas.onclick = () => removerTarefas(false) 

 
        
    
