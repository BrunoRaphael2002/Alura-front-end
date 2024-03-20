import React from "react";

import './style.css';

import Logo from "../logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../iconesHeader";



function Header() {
    return (
    
         <header className="App-header">
      <nav>
      <Logo/>
      <OpcoesHeader/>
      <IconesHeader/>
      </nav>

      </header>
    
    );
  }
  
  export default Header;