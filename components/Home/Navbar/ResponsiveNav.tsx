"use client"
import React, { useState } from 'react'
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
    
    const [showNav,setShowNav]=useState(false);

    const openNavHandler =()=> setShowNav(true);
    const closeNavhandler =()=> setShowNav(false)
  return (
    <div>
      <Nav openNav={openNavHandler}/>
      <MobileNav showNav={showNav} closeNav={closeNavhandler}/>
    </div>
  )
}

export default ResponsiveNav
