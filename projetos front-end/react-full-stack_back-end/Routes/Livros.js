const {Router} = require ('express')
//Estrutura de importaçã:const { getLivros } = require("../controladores/livro")
const { getLivros } = require("../Controladores/livro")

    const router = Router()

        router.get('/', getLivros)
                
                router.patch('/', (req, res) => {
                    res.send('Você fez uma requisição do tipo PATCH')
                })
                
                router.delete('/', (req, res) => {
                    res.send('Você fez uma requisição do tipo DELETE')
                })

                router.put('/', (req, res) => {
                    res.send('Você fez uma requisição do tipo PUT')
                })

            module.exports = router //similar ao export default do react

                //Verbos HTTP
                //GET, para pega os dados
                //POST, para inserir dados
                //DELETE, para deletar dados
                //PATCH, para editar dados
                //https://httpstatusdogs.com (ver os Status Http)
           