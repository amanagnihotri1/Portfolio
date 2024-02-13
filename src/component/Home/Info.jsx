import React from 'react'

export const Info = () => {
  return (
    <div className='about__info'>
    <div className='about__box'>
    <i class='bx bx-award about_icon'></i>
     <h3 className='about__title'>
     Experience
     </h3>
     <span className='about__subtitle'>
     1 Year Working
     </span>
    </div>
    <div className='about__box'>
    <i class='bx bx-briefcase about_icon'></i>
    <h3 className='about__title'>
     Completed
     </h3>
     <span className='about__subtitle'>
      10+ projects
     </span>
    </div>
    <div className='about__box'>
    <i class='bx bx-support about_icon' ></i>
    <h3 className='about__title'>
     Worked on
     </h3>
     <span className='about__subtitle'>
     MERN stack
     </span>
    </div>
    </div>
  )
}
