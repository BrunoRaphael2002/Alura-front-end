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

function App() {
  return (
    <AppContainer>
   
  
     <Pesquisa/>
     <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;

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

*/
