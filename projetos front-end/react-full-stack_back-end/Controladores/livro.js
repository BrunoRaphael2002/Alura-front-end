const { param } = require("../Routes/Livros")
const { getTodosLivros } = require("../Servicos/livros")

const fs = require('fs')

function getLivros(req , res)  {
   
    // '/' = path , (req = requisição , res = response)
    try {
        const livros =  getIdLivros(id)
        res.send(livros)
    } catch (error) {

    }
}

//pegar livro por ID
function getLivro_id(req , res)  {
 

    try {
        const livro =  getTodosLivros()
        const id =    req.params.id 
        res.send(livro)
    } catch (error) {

    }
}

module.exports = {getLivros}