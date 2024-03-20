import React from 'react'
import iconPerfil from "../../assets/perfil.svg"
import iconSacola from "../../assets/sacola.svg"

import './index.css';

//o .map vai 'mapear' todos os dados do arry e retornar no html como é visto na <li></li>


const icons = [ iconSacola , iconPerfil]

export default function IconesHeader() {
  return (
    <div>

<ul className="icones">
                {icons.map((icones_header)=>(
                  <li className="icone_img"><img src={icones_header} alt="" /></li>
                ))}
              </ul>
    </div>
  )
}
