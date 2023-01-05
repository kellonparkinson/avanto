import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => !setShowMenu(!showMenu)

  return (
    <header>
        <h2>Avanto</h2>
        <BiMenu size='35px' style={{zIndex: 3}} onClick={handleMenu} />
        <nav className={showMenu ? 'menu-show' : 'menu-hide'}>
          <Link to='/'>
            <button onClick={handleMenu}>Home</button>
          </Link>
          <Link to='/auth'>
            <button onClick={handleMenu}>Login</button>
          </Link>
        </nav>
    </header>
  )
}

export default Header