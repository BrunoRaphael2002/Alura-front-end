//const { param } = require("../Routes/Livros")
const { getTodosLivros, getLivrosPorId,insereLivro, modificaLivro, deletarLivroPorId } = require("../Servicos/livros")


const fs = require('fs')

function getLivros(req , res)  {
   
    // '/' = path , (req = requisição , res = response)
    try {
        const livros =  getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//pegar livro por ID
function getLivro(req , res)  {
 

    try {
        const id = req.params.id
        const livro =  getLivrosPorId(id)
        res.send(livro)//Aqui ele vai enviar o array de livro por ID 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//Criando uma nova Função POST = Inserir dados

function postLivro(req, res){
    try{
        const livroNovo = req.body
        insereLivro(livroNovo)//essa função vai ser criada na pasta serviços
        res.status(201)//201 porque o Livro novo acabou de ser criado
        res.send("Livro inserido com Sucesso")
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}
//Criando uma nova Função PACTH = EDITA dados

function patchLivro(req, res){
        try{
            const id = req.params.id
            const body = req.body

            modificaLivro(body,id)
            res.send("Livro Editado com Sucesso")
        }catch(error){
            res.status(500)
        res.send(error.message)
        }
}

//Criando uma nova Função Delete = EDITA dados
function deleteLivro(req, res) {
    try {
        const id = req.params.id
        deletarLivroPorId(id)
        res.send("livro deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {getLivros,getLivro,postLivro,patchLivro, deleteLivro}