

import { useEffect,useState } from 'react'
import styled from 'styled-components'
import { deleteFavorito, getFavoritos } from '../Servicos/favoritos';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
}

      

      

 async function deletarFavorito(id) {
  await deleteFavorito(id)
  await setFavoritos()
  alert(`Livro de id:${id} deletado!`)
}

useEffect(() => {
  fetchFavoritos()
}, [])
  return (

    <AppContainer>
      {favoritos.map( favorito => (
        <div onClick={() => deletarFavorito(favorito.id)}>
          
                      <p>{favorito.nome}</p>
                
        </div>
          ) )}
    </AppContainer>
  );
}

export default Favoritos
