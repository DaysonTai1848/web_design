import React, { useState } from 'react';

// import from react icon
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// import logo from assets folder
import logo from "../../assets/logo.svg";

// import css styling
import "./navbar.css";

// BEM CSS naming convention = Block Element Modifier

// Create an arrow function that will return certain elements
// Elements can be reused 
const Menu = () => (
  // Wrape the elements using React fragment symbol
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)


const Navbar = () => {
  // useState hook from react
  const [toggleMenu, setToggleMenu]= useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        
        {toggleMenu
          // If toggle menu is opened, then
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          
          // else, then
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        
        {/* && means return only if toggleMenu is true */}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              
              {/* contains all the menu elements */}
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar