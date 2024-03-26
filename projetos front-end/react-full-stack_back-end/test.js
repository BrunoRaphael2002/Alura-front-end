const fs = require("fs");
//no node js existe um arquivo chamado file system que ler e insere dados 



const dadosAtuais =(JSON.parse (fs.readFileSync('livros.json')));

const novoDado = {
    "id": "3",
    "nome": "Livro Incrivelmente incrivel"
};

fs.writeFileSync('livros.json', JSON.stringify([...dadosAtuais, novoDado ]));
//stringfy transforma em texto
//parse em Json com os dados (explicação da Alura)
//console.log(JSON.parse (fs.readFileSync('livros.json')))
//Ele recebe o caminho no parametro ou seija o arquivo .json
//para ver o console.log rodar é só colocar no terminal node test.js
//e lembrar de adicionar Json.parse para que possa ler os dados do arquivo
//A função  readFileSync irá ler os arquivos ou seja mostrar na tela
// E a função writeFileSync será usada para digitar os dados
//muito similar ao print e input 