import React from 'react'
import "../Projects/project.css";
import { projects } from '../../utils';
export const Projects = () => {
  return (
    <section className='project section' id='portfolio'>
    <h2 className='section__title'>Projects</h2>
    <span className='section__subtitle'>My personal projects</span>
    <div className='project__container'> 
    {projects.map((item,key)=>
    (<div className='project__main'>
     <img src={item.img} alt='not_found'/>
    <h3 className='title'>{item.projectTitle}</h3>
    <hr style={{margin:'4px 0px'}}/>
    <div className='techstack__tech'>{item.techStack.join(',')}</div>
    <div className='techStack__desc'>  
    {item.description.toString().split(',').map((it,key)=>(
      <div className='text__desc'>{key+1}. {it}</div>  
    ))} 
    </div>
    <div className='project__tray'>
    <a href={item.githubLink} className='home__social-icon' target='_blank' rel="noreferrer">
    <i class='bx bxl-github'></i>
    </a>
    <a href={item.deployedLink} className='home__social-icon' target='_blank' rel="noreferrer">
    <i class='bx bx-link'></i>  
    </a>
    </div>    
    </div>
    ))}
    </div>
    </section>
  )
}
