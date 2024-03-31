import Pesquisa from '../components/Pesquisa';
import styled from "styled-components";
import UltimosLancamentos from '../components/UltimosLancamentos';

const AppContainer = styled.div`

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);


li{
  list-style: none;
}
`;



function Home() {
  return (
    <AppContainer>
   
  
     <Pesquisa/>
     <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home;

/*
Projeto fullStack React =>

1- instalar o react e seus pacotes

2- entender como funciona o jsx

3- criando componentes 

4- desenvolvendo automações front-end com Js

5- tornando o codigo mais simples de fazer manuntenção e de configurar

7- instalando Styled componentes para tornar mais dinamico o React

6- criando funcionalidade com array .map e .filter 

9- utilizando UseState para trabalhar com mudança de estado de uma constante e do DOM

10- utilizando Props e finalizando a parte 1

Parte 2 : Node.js criando API com Express

parte 3 :consumindo API no React

iniciar a aplicação -> npm run start


O acesso à requisição na URL onde fica a nossa API que veio do nosso site no localhost:3000 foi bloqueado pela política da CORS (Cross-origin Resource Sharing).

Esse CORS é basicamente um sistema de segurança para que você controle quem pode fazer requisições para a sua API. Não configuramos isso na API, logo o localhost:3000 está bloqueado a fazer requisições para a nossa API por padrão do Express.

Como resolver isso? É extremamente simples.

Instalando CORS

instalaçao de segurança para usar API npm install cors(Obs: no servidor deve ser instalado no backend)

*/
