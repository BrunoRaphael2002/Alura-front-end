const {Router} = require ('express')

    const router = Router()

        router.get('/', (req , res) => {
            // '/' = path , (req = requisição , res = response)
                res.send('olá mundo ')})

            module.exports = router //similar ao export default do react

                //Verbos HTTP
                //GET, para pega os dados
                //POST, para inserir dados
                //DELETE, para deletar dados
                //PATCH, para editar dados
           