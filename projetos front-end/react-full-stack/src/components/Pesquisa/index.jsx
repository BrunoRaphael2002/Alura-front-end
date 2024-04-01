import { useEffect, useState } from 'react'
import InputStyle from '../input';
import { getLivros } from '../../Servicos/livros'
import { postLivrosFavoritos } from '../../Servicos/favoritos'
import styled from 'styled-components';

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

export default function Search() {

  const [livroPesquisado, setLivroPesquisado] = useState([])
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros()
  }, [])

  async function fetchLivros() {
    const livrosAPI = await getLivros()
    setLivros(livrosAPI)
  }

  async function insereLivroFavorito(id) {
    await postLivrosFavoritos(id)
    alert('Livro adicionado a favoritos.')
  }

  console.log(livroPesquisado)

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <InputStyle
        type="text"
        placeholder='Escreva sua próxima leitura'
        onBlur={(e) => {
          const textoDigitado = e.target.value
          const resultadoPesquisa = livros.filter((livro) => livro.nome.includes(textoDigitado))
          setLivroPesquisado(resultadoPesquisa)
        }}
      />
      {livroPesquisado.map(livro => (
        <Resultado key={livro.id} id='resultSearch' onClick={() => insereLivroFavorito(livro.id)}>
          <p>{livro.nome}</p>
          <img src={livro.src} alt={livro.nome} />
        </Resultado>
      ))}
    </PesquisaContainer>
  )
}