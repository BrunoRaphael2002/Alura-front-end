//Manipilação do DOM e uso de API

const containerVideos = document.querySelector(".videos__container")

async function BuscarEMostrarVideos(){
    try{

const Buscar = await fetch("http://localhost:3000/videos");

const Videos = await Buscar.json();
//Quando receber a resposta do Json então execute o codigo abaixo .then()....

   Videos.forEach((video)=>{

        containerVideos.innerHTML += `
        <li class="videos__item">
        <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                 <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
                 <h3 class="titulo-video">${video.titulo}</h3>
                     <p class="titulo-canal">${video.descricao}</p>
                     <p class="categoria" hidden>${video.categoria}</p>
             </div>

             
          
    </li>
    
        `})//muito similar ao React.js

    }catch(error){
        containerVideos.innerHTML +=`<p>Houve um erro ao carregar os videos: ${error}</p>
        
        `
    }



}

BuscarEMostrarVideos();



//fetch significa buscar ou seja a const API
//Esta dizendo busque os dados desse link que é o
//o arquivo videos.json utilizando o json server
//simulando uma api (no caso seria uma Api Fake)
//console.log(Api)
//then significa entao
//capturando erros com .catch
//melhorando a aplicação

//tratando erros

//.then = call back ou seja um função espera a outra para executar algo
// para evitar o uso de varios .then utiliza o Async/Await
//basicamente vamos trocar o .then por uma função asincrona

//utilizando try catch e finally para tratar erros


//criando a filtragem e barra de pesquisa




const barraDePesquisa = document.querySelector(".pesquisar__input");



//Código omitido



barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item");

    if(barraDePesquisa.value != ""){
        for(let video of videos){
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraDePesquisa.value.toLowerCase();

            if(!titulo.includes(valorFiltro)){
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }

        }
    }
}

//dentro desse if vai ser pego cada item do array ou objeto do arquivo videos.json
//e com isso vai ser feita a filtragem igual no porjeto da DevMedia

//filtragem por meio de botões igual no porjeto do restaurante da devMedia

//Código omitido


const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria(filtro){
    const videos = document.querySelectorAll(".videos__item");
    for(let video of videos){
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}







