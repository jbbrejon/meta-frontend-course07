// Import CSS module
import styles from './Button.module.css'

function Button({ type, status, valid, invalid }) {
    return (
        <>
            {status ? (
                <button className={styles.buttonDisabled} type={type} disabled={status}>{invalid}</button>
            ) :
                (<button className={styles.button} type={type} disabled={status}>{valid}</button>)
            }
        </>
    )
}

export default Button