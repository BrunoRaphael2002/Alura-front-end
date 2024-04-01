//importando o Express ->
const express = require("express")
//importando a rota Livrros ->
const RotaLivros = require("./Routes/Livros")
////importando a cors ->


const app = express()


const cors = require("cors");



app.use(cors({
  origin: "http://localhost:3000", // Permitir apenas solicitações do front-end em localhost:3000
}));



app.use(express.json())//Agora o Node recebe e salva no banco de dados Json
//com essa função ele não vai retornar mais Null 
//pois agora ele reconhece o json

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

8- Post ,patch, Put , Delete apartir do body



*/