// Import assets
import pictureA from '../../assets/presentation/Mario and Adrian A.jpg'
import pictureB from '../../assets/presentation/Mario and Adrian b.jpg'

// Import CSS module
import styles from './Presentation.module.css'

function Presentation() {
    return (
        <section className={styles.presentation}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>Little Lemon</h2>
                    <div className={styles.city}>Chicago</div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className={styles.pictures}>
                    <img className={styles.translate} src={pictureA} alt="Mario and Adrian A" />
                </div>
            </div>
        </section>
    )
}

export default Presentation