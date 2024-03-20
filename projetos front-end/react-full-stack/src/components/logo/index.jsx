import React from 'react'
import logo from"../../assets/logo.svg";

import './index.css';

export default function Logo() {
  return (
    <div className='logo'>
          <img
          src={logo}
           alt='logo'
           ></img>
          <p><strong>Alura</strong>Books</p>
            </div>
  )
}
