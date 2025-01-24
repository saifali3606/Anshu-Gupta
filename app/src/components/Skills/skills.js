import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I have experience with technologies like React, Angular, Node.js, Python, AWS, and Azure. I’m skilled in managing databases and using Git for version control. My expertise spans both front-end and back-end development:</span>
        <div className='skillBars'>
              <div className='skillBar'>
                 <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                 <div className='skillBarText'>
                    <h2>UI/UX Design </h2>
                    <p>Demo text , write own content </p>
                 </div>
              </div>
              <div className='skillBar'>
                 <img src={WebDesign} alt='WebDesign ' className='skillBarImg'/>
                 <div className='skillBarText'>
                    <h2>Website Design </h2>
                    <p>Demo text , write own content </p>
                 </div>
              </div>
              <div className='skillBar'>
                 <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                 <div className='skillBarText'>
                    <h2>App Design </h2>
                    <p> Demo text , write own content</p>
                 </div>
              </div>
        </div>
    </section>
  )
}

export default Skills;