//importando o Express

const express = require("express")
//importando a rota Livrros
const RotaLivros = require("./Routes/Livros")

const app = express()

const port = 8000

app.use('/livros', RotaLivros)



app.listen(port,() =>{
    console.log(`Escutando a porta ${port} `)
})

/*
1- instalar o Express.js npm install Express
npm install express


2- Instalar o Nodemon.js para autualizar o navegador de forma mais rapida 
npm install -g nodemon # or using yarn: yarn global add nodemon (instalaçã de forma global para funcionar)

3- Entendendo sobre APi

4- Verbos Http Get,Post,Patch,Delete 

5-Instalando e utilizando o Postman

6- Criar Rotas,Controladores e Serviços (Divisão de arquivos e pastas)

7- Importando o Fs para mais informações olhe o arquivo test.js

*/