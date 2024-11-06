import styles from './Header.module.css' // CSS MODULE MECHANISM
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <ul className={styles.menu}>
                <li className={styles.leftMenu}>
                <NavLink 
                  to="/"
                  className={({ isActive }) => (isActive ? styles.active : '')}
                  end
                  >
                    <img src="" alt="" />Home
                </NavLink>
                </li>
                <li>
                <NavLink 
                  to="genres"
                  className={({ isActive }) => (isActive ? styles.active : '')}
                  >
                    Genres
                </NavLink>
                </li>
                <li>
                <NavLink 
                  to="movies"
                  className={({ isActive }) => (isActive ? styles.active : '')}
                  >
                  Movies
                </NavLink>
                </li>

                <li>
                <NavLink
                  to="register"
                  className={({ isActive }) => (isActive ? styles.active : '')}
                  >
                    Register
                </NavLink>
                </li>

                <li className={styles.rightMenu}>
                <NavLink
                 to="login"
                 className={({ isActive }) => (isActive ? styles.active : '')}
                 >
                  Login➜
                </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header