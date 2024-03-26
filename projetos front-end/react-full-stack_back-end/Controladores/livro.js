//const { param } = require("../Routes/Livros")
const { getTodosLivros, getLivrosPorId } = require("../Servicos/livros")


const fs = require('fs')

function getLivros(req , res)  {
   
    // '/' = path , (req = requisição , res = response)
    try {
        const livros =  getTodosLivros()
        res.send(livros)
    } catch (error) {

    }
}

//pegar livro por ID
function getLivro(req , res)  {
 

    try {
        const id = req.params.id
        const livro =  getLivrosPorId(id)
        res.send(livro)
    } catch (error) {

    }
}

module.exports = {getLivros,getLivro}