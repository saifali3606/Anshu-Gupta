import React from 'react';
import './intro.css';
import btnImg from '../../assets/suitcase.png';
import introImg from '../../assets/Profile.jpg';
import { Button, Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className='Introtext'>I'm <span className='introName'> Anshu Gupta </span> <br/> Software Engineer</span>
            <p className='introPara'>I am a software engineer with experience in building websites and web applications.</p>
            <Link> <Button className='btn'> <img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me </Button> </Link>
        </div>
        <img src={introImg} alt="Profile" className="introImg" />
    </section>
  )
}

export default Intro;