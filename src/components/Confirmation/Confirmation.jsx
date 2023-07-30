// Import CSS module
import styles from './Confirmation.module.css'

function Confirmation({ toggle }) {
    return (
        <div id="confirmation" className={styles.modal}>
            <div className={styles.modalContent}>
                <p>Your reservation has been confirmed!</p>
                <span className={styles.close} onClick={toggle}>&times;</span>
            </div>
        </div>
    )
}

export default Confirmation