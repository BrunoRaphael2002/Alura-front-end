import Pesquisa from '../components/Pesquisa';
import styled from "styled-components";


const AppContainerFav = styled.div`

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);


li{
  list-style: none;
}
`;

function Favoritos() {
  return (
    <AppContainerFav>
   
  
     <Pesquisa/>
   
    </AppContainerFav>
  );
}

export default Favoritos;