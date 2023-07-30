// Import components
import FooterItem from '../../components/FooterItem/FooterItem'

// Import assets
import logo from '../../assets/brand/logo-white.png'

// Import CSS module
import styles from './Footer.module.css'

function Footer() {

    const navigationList = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];
    const contactList = ["Address", "Phone Number", "Email"];
    const socialMediaList = ["Facebook", "Instragram", "Thread"];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <img className={styles.logo} src={logo} alt="Footer logo" />
                <div className={styles.items}>
                    <FooterItem title="Navigation" list={navigationList} />
                    <FooterItem title="Contact" list={contactList} />
                    <FooterItem title="Social Medias" list={socialMediaList} />
                </div>
            </div>
        </footer>
    )
}

export default Footer