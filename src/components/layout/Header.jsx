import React from 'react'

import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='headerContainer'>
      <div className="headerWrapper wrapper aic">
        <Link to='/' className="logo aic">
          <img src="https://rhythmquestgame.com/header_icon.png" alt="" />
          <h1 style={{color: 'white'}}>Rhytim Quest</h1>
        </Link>
        <nav>
          <ul className='aic'>
            <li><Link to='/playdemo'>Playable Demo</Link></li>
            <li><Link to='/devlog'>Devlog</Link></li>
            <li><Link to='/presskit'>Presskit</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header