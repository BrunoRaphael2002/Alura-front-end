

const botaoAddTask = document.querySelector('.app__button--add-task');

const formularioAddTask = document.querySelector('.app__form-add-task ');

const textArea = document.querySelector('.app__form-textarea ');

const listaDeTarefas = [
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
        descricao: textArea.value

    }

    listaDeTarefas.push(tarefa) //push é um metodo nativo do array
    localStorage.setItem('Tarefas', JSON.stringify(listaDeTarefas))

    /* Acrescenta novos elementos ao final de uma matriz e retorna o novo comprimento da matriz. basicamente ele acrensenta um item novo a lista então assim serião criados varias descrições de cada item da lista do formulario:

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