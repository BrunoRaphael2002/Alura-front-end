


import Header from './components/header';
import styled from "styled-components";

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
   
     <Header/>
    </AppContainer>
  );
}

export default App;

/*
1- instalar o react e seus pacotes

2- entender como funciona o jsx

3- criando componentes 

4- desenvolvendo automações front-end com Js

5- tornando o codigo mais simples de fazer manuntenção e de configurar

7- instalando Styled componentes para tornar mais dinamico o React
*/
