import React from 'react'
import { livros } from './dadosUltimosLancamentos'
import { Titulo }  from '../Titulo'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
              <Titulo cor={"#000"}>ÚLTIMOS LANÇAMENTOS</Titulo>
            <Titulo>ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt=''/>
                ) ) }
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
  )
}
