const fs = require("fs")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json") )
}
function getLivrosPorId(id) {
   const livros = JSON.parse( fs.readFileSync("livros.json") )
    
    const filtroLivro = livros.filter (livro => livro.id === id) [0]
    // {"id": "1","nome": "Livro irado"}
    return filtroLivro
}

function insereLivro(livroNovo){
    const livros = JSON.parse( fs.readFileSync("livros.json") )

    const novaListaDeLivros = [...livros, livroNovo ]


    fs.writeFileSync("livros.json",JSON.stringify(novaListaDeLivros))
}

module.exports  = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro
}
