// Import CSS module
import styles from './TestimonialCard.module.css'

function TestimonialCard({ testimonial }) {
    return (
        <article className={styles.card}>
            <div className={styles.rating}>Rating</div>
            <div className={styles.user}>
                <img src={testimonial.image} alt={testimonial.name} />
                <div className={styles.name}>{testimonial.name}</div>
            </div>
            <div className={styles.review}>{testimonial.review}</div>
        </article>
    )
}

export default TestimonialCard