const {Router} = require ('express')
//Estrutura de importaçã:const { getLivros } = require("../controladores/livro")
const { getLivros, getLivro, postLivro } = require("../Controladores/livro")

    const router = Router()

        router.get('/', getLivros)

        router.get('/:id',  getLivro)
                
                router.post('/', postLivro)

                router.patch('/')
                
                router.delete('/')

                router.put('/')

            module.exports = router //similar ao export default do react

                //Verbos HTTP
                //GET, para pega os dados
                //POST, para inserir dados
                //DELETE, para deletar dados
                //PATCH, para editar dados
                //https://httpstatusdogs.com (ver os Status Http)
           