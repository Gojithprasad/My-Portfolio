import React, { useState } from 'react';
import './Navbar.css';
import { Link as AnchorLink } from 'react-scroll';
import menu_open from '../../Assets/menu_open.svg'
import menu_close from '../../Assets/menu_close.svg'
import { useRef } from 'react';

function Navbar() {
  const [menu, setMenu] = useState(""); 
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <h1 className='logo'>gP_ji.</h1>
      <img src={menu_open}onClick={openMenu}   alt='image'className='nav-mob-open'></img>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='image' className='nav-mob-close'></img>
        <li>
          <AnchorLink 
            className='link' 
            to='home' 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("home")}
          >
            Home
          </AnchorLink>
          {menu === "home" ? <h1>-</h1> : null}
        </li>

        <li>
          <AnchorLink 
            className='link' 
            to='about' 
            offset={-50} 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("about")}
          >
            About Me
          </AnchorLink>
          {menu === "about" ? <h1>-</h1> : null}
        </li>


        <li>
          <AnchorLink 
            className='link' 
            to='work' 
            offset={-50} 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("work")}
          >
            Projects
          </AnchorLink>
          {menu === "work" ? <h1>-</h1> : null}
        </li>

        <li>
          <AnchorLink 
            className='link'
            to='contact' 
            offset={-50} 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("contact")}
          >
            Contact
          </AnchorLink>
          {menu === "contact" ? <h1>-</h1> : null}
        </li>
      </ul>
      <div className='nav-connect'>
      <AnchorLink 
           
           to='contact' 
           offset={-50} 
           smooth={true} 
           duration={500} 
           onClick={() => setMenu("con")}
         >
        Connect With Me
        </AnchorLink>
          </div>

    </div>
  );
}

export default Navbar;






