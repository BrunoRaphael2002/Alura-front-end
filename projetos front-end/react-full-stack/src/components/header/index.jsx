import React from "react";
import logo from"../../assets/logo.svg";
import iconPerfil from "../../assets/perfil.svg"
import iconSacola from "../../assets/sacola.svg"
import './style.css';

const TextoOpcoes = ['Categorias', 'Favoritos','Minha Estante'];

//o .map vai 'mapear' todos os dados do arry e retornar no html como é visto na <li></li>

const icons = [ iconSacola , iconPerfil]

function Header() {
    return (
      <div>
        <header className="App-header">
        <nav>
          <div className='logo'>
          <img
          src={logo}
           alt='logo'
           ></img>
          <p><strong>Alura</strong>Books</p>
            </div>
         
           
              <ul className="navegacao">

              { TextoOpcoes.map((texto) => (
                     <li className='link_nav_li'><p>{texto}</p></li>
                ) ) }
        
              </ul>

             

              <ul className="icones">
                {icons.map((icones_header)=>(
                  <li className="icone_img"><img src={icones_header} alt="" /></li>
                ))}
              </ul>


            </nav>
        </header>
      </div>
    );
  }
  
  export default Header;