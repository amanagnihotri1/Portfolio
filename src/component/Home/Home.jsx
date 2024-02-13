import "./home.css";
import React from 'react'
import { Social } from './Social';
import { Data } from './Data';
import { Scrolldown } from './Scrolldown';
export const Home = () => {
  return (
  <section className="home section" id='home'>
  <div className="home__container container grid">
   <div className='home__content'>
    <Social/>
    <div className='home__img'></div>
   <Data/>
   </div>
   <Scrolldown/>
  </div>
  </section>
  )
}
