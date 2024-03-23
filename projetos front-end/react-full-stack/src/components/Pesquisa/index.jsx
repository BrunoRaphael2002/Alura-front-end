import React from 'react';
import InputStyle from '../input';
import styled from 'styled-components';
//utilisando Estados React useState
import { useState } from 'react';
//inserindo dados 

import { livros } from './dadosPesquisa';


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



export default function Pesquisa() {
        const [ livrosPesquisados, setLivrosPesquisados ] = useState([])

    

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
        <div>
                <p>{livro.nome}</p>
                 <img src={livro.src} alt='' />
        </div>

    ))}
    </PesquisaContainer>
  )
}
