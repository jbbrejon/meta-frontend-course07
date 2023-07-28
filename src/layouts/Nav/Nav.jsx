// Import dependencies
import { NavLink } from "react-router-dom"

// Import CSS module
import styles from './Nav.module.css'

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><NavLink to="/">Home</NavLink></li>
                <li className={styles.li}><NavLink to="/about">About</NavLink></li>
                <li className={styles.li}><NavLink to="/menu">Menu</NavLink></li>
                <li className={styles.li}><NavLink to="/reservations">Reservations</NavLink></li>
                <li className={styles.li}><NavLink to="/order">Order Online</NavLink></li>
                <li className={styles.li}><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav