import Nav from "../Nav/Nav"

import logo from '../../assets/brand/Logo.svg'

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon logo" />
            <Nav />
        </header>
    )
}

export default Header