// Import CSS module
import styles from './WeekSpecialCard.module.css'

function SpecialItem({ meal }) {
    return (
        <article className={styles.article}>
            <div className={styles.card}>
                <img src={meal.image} alt={meal.name} />
            </div>
            <div className={styles.cardHeader}>
                <h3>{meal.name}</h3>
                <span>{meal.price}</span>
            </div>
            <div className={styles.cardFooter}>
                <p>{meal.description}</p>
            </div>
        </article>
    )
}

export default SpecialItem