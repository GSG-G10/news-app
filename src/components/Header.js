import React from 'react'
import './Header.css'
import logo from '../assets/logo.png';

function Header ({searchValue, handleSearchValue, handleClick}) {
  return (
    <header className="site-header">
      <div className="site-logo">
        <img src={logo} alt="news-logo" />
      </div>
      <div className="search-input">
        <input type="text" name="search" placeholder="Search" value={searchValue} onChange={(e) => handleSearchValue(e)} />
        <button  onClick = {()=> handleClick('you clicked here')}>Search</button>
      </div>
    </header>
  )
}

export default Header;