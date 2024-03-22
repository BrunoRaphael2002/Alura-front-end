import React from 'react';
import iconPerfil from "../../assets/perfil.svg";
import iconSacola from "../../assets/sacola.svg";

import styled from 'styled-components';

const Icones = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    gap: 40px;
`;

const IconeImg = styled.li`
     width: 25px;
`;

//o .map vai 'mapear' todos os dados do arry e retornar no html como é visto na <li></li>


const icons = [ iconSacola , iconPerfil]

export default function IconesHeader() {
  return (
    <div>

<Icones>
                {icons.map((icones_header)=>(
                  <IconeImg><img src={icones_header} alt="" /></IconeImg>
                ))}
              </Icones>
    </div>
  )
}
