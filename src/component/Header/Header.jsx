import React from 'react'
import { useState } from 'react';
import "../Header/header.css";
export const Header = () => {
 const[toggle,setToggle]=useState(false);
    return (
   <header className="header">
    <nav className="nav container">
    <a href='index.html' className='nav__logo'>
     Aman Agnihotri
    </a>
    <div className={toggle?"nav__menu show-menu":"nav__menu"}>
     <ul className='nav__list grid'>
      <li className='nav__item'>
        <a className='nav__link active-link' href='#home'>
            <i className='uil uil-estate nav__icon'>
            </i>
            Home
        </a>
      </li>
      <li className='nav__item'>
        <a className='nav__link active-link' href='#about'>
        <i class="uil uil-user nav__icon">  
        </i>
            About
        </a>
      </li>
      <li className='nav__item'>
        <a className='nav__link active-link' href='#skills'>
        <i class="uil uil-file-alt nav__icon"></i>
            Skills
        </a>
      </li>
         <li className='nav__item'>
        <a className='nav__link active-link' href='#portfolio'>
        <i class="uil uil-image nav__icon"></i>
            Portfolio
        </a>
      </li>
        <li className='nav__item'>
        <a className='nav__link active-link' href='#contact'>
        <i class="uil uil-message nav__icon"></i>
            Contact
        </a>
         </li>
     </ul>
     <i class="uil uil-times nav__close"  onClick={()=>setToggle(!toggle)}></i>
    </div>
     <div className='nav__toggle' onClick={()=>setToggle(!toggle)}>
     <i class="uil uil-apps nav__icon"></i> 
     </div>
    </nav>
   </header>
  )
}
