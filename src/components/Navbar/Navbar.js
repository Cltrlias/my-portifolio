import React from 'react';
import css from "./navbar.css";
import logo from "../../assets/logo.png" ;
import contactImg from '../../assets/contact.png';
import {Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <img src= {logo} alt='' className='logo' />
        <div className='desktopMenu'>
          <Link className='desktopMenuListItem'>home</Link>
          <Link className='desktopMenuListItem'>about</Link>
          <Link className='desktopMenuListItem'>client</Link>
          <Link className='desktopMenuListItem'>Portfolio</Link>



        </div>
        <button  className='desktopMenuBtn'>
          <img src='' alt='' className='desktopMenuImg' /> Contact Me</button>




      </nav>
    </div>
  )
}

export default Navbar

