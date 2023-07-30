// Import components
import BookingForm from "../../components/BookingForm/BookingForm"

// Import CSS module
import styles from './BookingPage.module.css'

function BookingPage() {
    return (
        <main>
            <h1 className={styles.title}>Reservations</h1>
            <BookingForm />
        </main>
    )
}

export default BookingPage