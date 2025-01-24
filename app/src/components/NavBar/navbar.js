import React ,{useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo3.png';
import menu from '../../assets/menu.png';
import contactImage from '../../assets/contactLogo.png';
import { Button, Link } from 'react-scroll';

const Navbar = () => {
    const[showMenu,setShowMenu]= useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
    <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} offset={-50} smooth={true} duration={500} className='desktopMenuListItem'>Home  </Link>
        <Link activeClass='active' to='skills' spy={true} offset={-50} smooth={true} duration={500} className='desktopMenuListItem'>About  </Link>
        <Link activeClass='active' to='works' spy={true} offset={-50} smooth={true} duration={500} className='desktopMenuListItem'>Portfolio  </Link>
        <Link activeClass='active' to='client' spy={true} offset={-50} smooth={true} duration={500} className='desktopMenuListItem'>Clients </Link>
    </div>
        <Button className='desktopmenuBtn' onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }} >
          <img src={contactImage} alt=" " className='desktopMenuImg' />
             Contact Me
        </Button>

    <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
    <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} offset={-100} smooth={true} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home  </Link>
        <Link activeClass='active' to='skills' spy={true} offset={-100} smooth={true} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About  </Link>
        <Link activeClass='active' to='works' spy={true} offset={-100} smooth={true} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio  </Link>
        <Link activeClass='active' to='client' spy={true} offset={-100} smooth={true} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Clients </Link>
        <Link activeClass='active' to='contact' spy={true} offset={-100} smooth={true} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact </Link>
    </div>
    

      
    </nav>
  )
}

export default Navbar;