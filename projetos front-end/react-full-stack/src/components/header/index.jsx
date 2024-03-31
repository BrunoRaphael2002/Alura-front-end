import React from "react";



import Logo from "../logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../iconesHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";
//utilizando styled components
const HeaderContainer = styled.header`
  position: fixed;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    
  
   



`

const NavContainer = styled.nav`
   width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
`



function Header() {
    return (
    
         <HeaderContainer>
      <NavContainer>

     <Link to='/'> 
     <Logo/>
     </Link>

      <OpcoesHeader/>
      <IconesHeader/>
      </NavContainer>

      </HeaderContainer>
    
    );
  }
  
  export default Header;