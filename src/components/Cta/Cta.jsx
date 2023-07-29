// Import assets
import restaurantfood from '../../assets/cta/restauranfood.jpg'

// Import CSS module
import styles from './Cta.module.css'

function Cta() {

    const presentation = "We are a familly owned restaurant, focused on traditional recipes served with a modern twist"
    return (
        <section className={styles.cta}>
            <div className={styles.description}>
                <h1 className={styles.h1}>Little Lemon</h1>
                <div className={styles.city}>Chigago</div>
                <div className={styles.presentation}>{presentation}</div>
            </div>
            <img className={styles.picture} src={restaurantfood} alt="Waitress serving italian food" />
        </section>
    )
}

export default Cta