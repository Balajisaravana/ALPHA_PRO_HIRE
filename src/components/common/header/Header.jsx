import React, { useState } from "react"

import Head from "./Head"
import "./header.css"
import { NavLink } from "react-router"
import Alaph_icon from '../../../assets/Alpha_icon_2.png'

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            {/* <li>
              <NavLink to='/courses'>All Courses</NavLink>
            </li> */}
            <li>
              <NavLink to="/about">About US</NavLink>
            </li>
            <li>
              <NavLink to='/faq'>Our Services</NavLink>
            </li>
            {/* <li>
              <NavLink to='/manpower_recruitment'>Manpower Recruitment</NavLink>
            </li>
            <li>
              <NavLink to='/journal'>Campus Placement</NavLink>
            </li>
            <li>
              <NavLink to='/journal'>Background Verification</NavLink>
            </li> */}
            <li>
              <NavLink to='/contact'>Contact US</NavLink>
            </li>
          </ul>
          <div className='start'>
          <img width={120} height={40} src={Alaph_icon} alt="" />

          </div>
          
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
