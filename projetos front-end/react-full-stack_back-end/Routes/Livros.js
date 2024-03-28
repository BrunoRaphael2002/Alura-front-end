const {Router} = require ('express')
//Estrutura de importaçã:const { getLivros } = require("../controladores/livro")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../Controladores/livro")

    const router = Router()

        router.get('/', getLivros)

        router.get('/:id',  getLivro)
                
                router.post('/', postLivro)

                router.patch('/:id', patchLivro)
                
                router.delete('/:id',deleteLivro)

                router.put('/')

            module.exports = router //similar ao export default do react

                //Verbos HTTP
                //GET, para pega os dados
                //POST, para inserir dados
                //PUT,
                //DELETE, para deletar dados
                //PATCH, para editar dados
                //https://httpstatusdogs.com (ver os Status Http)
           