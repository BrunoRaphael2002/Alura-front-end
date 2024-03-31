import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//styled-components:
const TextListUl =  styled.ul` 
  list-style: none;
    display: flex;
`;

const LinkNavli = styled.li`
        font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    text-transform: uppercase;
`;



//automação de componentes 
const TextoOpcoes = ['Categorias', 'Favoritos','Estante'];
//o .map vai 'mapear' todos os dados do arry e retornar no html como é visto na <li></li>  const TextoOpcoes = ['Categorias', 'Favoritos','Minha Estante'];

export default function OpcoesHeader() {
  return (
    <div>
               <TextListUl>

              { TextoOpcoes.map((texto) => (
                     <Link to={`/${texto.toLowerCase()}`}>
                       <LinkNavli><p>{texto}</p></LinkNavli>
                     </Link>
                ) ) }
        
              </TextListUl>

    </div>
  )
}


//rfc cria a estrutura basica para função no react
/*export default function index() {
  return (
    <div>index</div>
  )
}*/


