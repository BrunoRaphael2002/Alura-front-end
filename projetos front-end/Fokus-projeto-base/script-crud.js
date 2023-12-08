

const botaoAddTask = document.querySelector('.app__button--add-task');

const formularioAddTask = document.querySelector('.app__form-add-task ');

botaoAddTask.addEventListener('click', ()=>{
    formularioAddTask.classList.toggle('hidden')
})

// com esse trecho de codigo acima já é 
//possivel criar um menu 
//navbar hambúrguer responsivo

