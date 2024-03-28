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
//PUT
function insereLivro(livroNovo){
    const livros = JSON.parse( fs.readFileSync("livros.json") )

    const novaListaDeLivros = [...livros, livroNovo ]


    fs.writeFileSync("livros.json",JSON.stringify(novaListaDeLivros))
}

//PATCH EDITA NOME DE ACORDO COM O ID
function modificaLivro(modificacoes, id){
   
        let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
        //let  será usando let pois o dado será editado
        const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
        
        const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    
        livrosAtuais[indiceModificado] = conteudoMudado
        fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
    }
    
    //DELETE

    function deletarLivroPorId(id) {
        const livros = JSON.parse(fs.readFileSync("livros.json"))
    
        const livrosFiltrados = livros.filter( livro => livro.id!== id )
        fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
    }



module.exports  = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro, 
   deletarLivroPorId
}
