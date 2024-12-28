import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6'

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled)
  }

  function handleCloseMenu() {
    setToggle(false)
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
            <div className={styles.logo}>
                <a href="#" onClick={handleCloseMenu}>JD PORT</a>
            </div>
            
            <ul>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className={styles.button}>
                <a href="#">Hire Me</a>
            </div>
        </div>

        {/* Mobile menu */}
        <FaBars className={styles.bars} onClick={handleToggle}/>
        {isToggled ? (
          <>
            <ul className={styles.mobile_menu}>
                <li><a href="#skills" onClick={handleCloseMenu}>Skills</a></li>
                <li><a href="#portfolio" onClick={handleCloseMenu}>Portfolio</a></li>
                <li><a href="#contact" onClick={handleCloseMenu}>Contact</a></li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="#" onClick={handleCloseMenu}>Hire Me</a>
            </div>
          </>
        ) : null}

      </div>
    </nav>
  )
}

export default Navbar
