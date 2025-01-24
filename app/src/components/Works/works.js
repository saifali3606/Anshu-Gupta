import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio-1.jpg';
import portfolio2 from '../../assets/portfolio-2.jpg';
import portfolio3 from '../../assets/portfolio-3.jpg';
import portfolio4 from '../../assets/portfolio-1.jpg';
import portfolio5 from '../../assets/portfolio-2.jpg';
import portfolio6 from '../../assets/portfolio-3.jpg';
import { Button } from 'react-scroll';



const Works = () => {
  return (
    <section id="works">
        <span className='worksTitle'>My Portfolio</span>
        <span className='worksDesc'>I have experience working with the following technologies:</span>
        <div className='worksImgs'>
            <img src={portfolio1} alt=' ' className='worksImg'/>
            <img src={portfolio2} alt=' ' className='worksImg'/>
            <img src={portfolio3} alt=' ' className='worksImg'/>
            <img src={portfolio4} alt=' ' className='worksImg'/>
            <img src={portfolio5} alt=' ' className='worksImg'/>
            <img src={portfolio6} alt=' ' className='worksImg'/>
            
        </div>
        <Button className='worksBtn'>View More</Button>
    </section>
  )
}

export default Works;