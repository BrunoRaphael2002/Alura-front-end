
/*
import InputStyle from '../input';
import styled from 'styled-components';
//utilisando Estados React useState
import React, { useState,useEffect } from 'react';

import { getLivros } from '../../Servicos/livros';
import {  postFavorito} from '../../Servicos/favoritos';

//inserindo dados 

//Utilizando UseEffect


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



export default function Pesquisa() {
        const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
        const [ livros, setLivros ] = useState([])

        useEffect(()=> {
            fetchLivros()
        }, [])

        async function fetchLivros() {
            const livrosDaAPI = await getLivros()
            setLivros(livrosDaAPI)
        }
    
        // código omitido

    async function insertFavorito(id) {
        await postFavorito(id)
        alert(`Livro de id:${id} inserido!`)
}



  return (
    <PesquisaContainer>
    <Titulo>Já sabe por onde começar ?</Titulo>
    <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>

    <InputStyle 
    type="text"
    placeholder='Escreva sua próxima leitura'
    onBlur={evento => {
        const textoDigitado = evento.target.value
        const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
        setLivrosPesquisados(resultadoPesquisa)
    }}
    />
   
    {livrosPesquisados.map(livro =>(
        <Resultado onClick={() => insertFavorito(livro.id)}>
                <p>{livro.nome}</p>
                 <img src={livro.src} alt='' />
        </Resultado>





        /* Obs: lembrar de quando criar o styled component para estilizar uma div ou algo do tipo trocar o nome da tag html seja ela ul, li, main, nav, section, div, etc... pelo nome do componente no caso aqui é Resultado 
          <div>
                <p>{livro.nome}</p>
                 <img src={livro.src} alt='' />
        </div>

        adicionar livros gratis para downlad
        

    ))}
    </PesquisaContainer>
  )
}
 */