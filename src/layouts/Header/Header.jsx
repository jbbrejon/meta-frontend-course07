// Import components
import Nav from "../Nav/Nav"

// Import assets
import logo from '../../assets/brand/Logo.svg'

// Import CSS module
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Little Lemon logo" />
            <Nav />
        </header>
    )
}

export default Header