

const botaoAddTask = document.querySelector('.app__button--add-task');

const formularioAddTask = document.querySelector('.app__form-add-task ');

const textArea = document.querySelector('.app__form-textarea ');

const ListaDeTarefas = [
    //lista de tarefas vai ser um Array vazio
]

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
        descricao:

    }
})