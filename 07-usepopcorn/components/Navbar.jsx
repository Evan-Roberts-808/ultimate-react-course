import React from 'react'
import { useState } from "react";
import Search from './Search'
import Logo from './Logo'
import NumResults from './numResults';

function Navbar({tempWatchedData, tempMovieData}) {


  return (
    <nav className="nav-bar">
        <Logo />
        <Search />
        <NumResults />
      </nav>
  )
}

export default Navbar