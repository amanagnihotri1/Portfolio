import React from 'react'
import "../Footer/footer.css";
export const Footer = () => {
  return (
    <footer className='footer'>
    <div className='footer footer__container'>
    <h1 className='footer__title'>Aman Agnihotri</h1>
    <ul className='footer__list'>
      <li>
       <a href='#about' className='footer__link'>
        About
       </a> 
      </li>  
      <li>
       <a href='#portfolio' className='footer__link'>
        Projects
       </a> 
      </li>  
      <li>
       <a href='#skills' className='footer__link'>
        Skills
       </a> 
      </li>  
      <li>
       <a href='#about' className='footer__link'>
        About
       </a> 
      </li>  
    </ul>
    <div className='footer__social'>
    <a href='https://twitter.com/XEGOatyoutube' className='home__social-icon' target='_blank'>
    <i class="bx bxl-twitter"></i>
    </a>
    <a href='https://github.com/amanagnihotri1' className='home__social-icon' target='_blank'>
    <i class="bx bxl-github"></i>
    </a>
    <a href='https://www.linkedin.com/in/aman-agnihotri-818102192/' className='home__social-icon' target='_blank'>
    <i class='bx bxl-linkedin'></i>
    </a>  
    </div>
    <span className='footer__copy'>&#169;Aman Agnihotri.All rights reserved</span>
    </div>
    </footer>
  )
}

