import React from 'react'
import './index.css';

const TextoOpcoes = ['Categorias', 'Favoritos','Minha Estante'];
//o .map vai 'mapear' todos os dados do arry e retornar no html como é visto na <li></li>

export default function OpcoesHeader() {
  return (
    <div>
               <ul className="navegacao">

              { TextoOpcoes.map((texto) => (
                     <li className='link_nav_li'><p>{texto}</p></li>
                ) ) }
        
              </ul>

    </div>
  )
}


//rfc cria a estrutura basica para função no react
/*export default function index() {
  return (
    <div>index</div>
  )
}*/


