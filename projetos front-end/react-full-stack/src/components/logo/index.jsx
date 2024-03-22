import React from 'react'
import logo from"../../assets/logo.svg";

import styled from 'styled-components';

const LogoContainer = styled.div`
   display: flex;
    font-size: 30px;
    background-color: white;
   
`;

const ImagemLogo = styled.img`
  margin-right: 10px;
`

export default function Logo() {
  return (
    <LogoContainer>
          <ImagemLogo
          src={logo}
           alt='logo'
           />
          <p><strong>Alura</strong>Books</p>
            </LogoContainer>
  )
}
