const fs = require('fs')

function getLivros(req , res)  {
    const livros = JSON.parse(fs.readFileSync("./livros.json"))
    // '/' = path , (req = requisição , res = response)
    try {
        res.send(livros)
    } catch (error) {

    }
}

module.exports = {getLivros}