
import { deleteLivrosFavoritos, getLivrosFavoritos } from '../Servicos/favoritos'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Favoritos() {

  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchLivrosFavoritos()
  }, [])

  async function fetchLivrosFavoritos() {
    const livrosFavoritos = await getLivrosFavoritos()
    setFavoritos(livrosFavoritos)
  }

  async function deletarFavorito(id) {
    await deleteLivrosFavoritos(id)
    await fetchLivrosFavoritos()
    alert('Livro deletado dos favoritos.')
  }

  return (
    <AppContainer className='Favoritos'>
      <h2>Aqui estão seus livros favoritos:</h2>
      <div className='resultadoContainer'>
        {favoritos.map(favorito => (
          <div key={favorito.id} className='resultado' onClick={() => deletarFavorito(favorito.id)}>
            <p>{favorito.nome}</p>
            <img src={favorito.src } alt=''/>
          </div>
        ))}
      </div>
    </AppContainer>
  )
}

export default Favoritos