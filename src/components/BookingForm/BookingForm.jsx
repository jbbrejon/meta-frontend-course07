// Import dependencies
import { useState } from 'react'

// Import components
import Button from '../Button/Button';

// Import CSS module
import styles from './BookingForm.module.css'

function BookingForm() {
    // Set initial state of component
    const initialState = {
        date: '',
        time: '',
        numberOfGuests: '',
        occasion: ''
    }
    // useState instance for reservation properties
    const [reservation, setReservation] = useState(initialState);

    // Time options
    const availableTimes = ["17:00", "18:00", "19:00", "21:00", "22:00"]
    const timeOptions = availableTimes.map((time) => <option>{time}</option>)

    // Update reservation properties
    function changeHandler(e) {
        console.log(e)
        setReservation({ ...reservation, [e.target.name]: e.target.value });
    }

    // Submit form
    function submitHandler(e) {
        e.preventDefault();
        console.log(reservation);
        // Reset reservation state
        setReservation(initialState);
    }

    function getIsFormValid() {
        return (
            reservation.date &&
            reservation.time &&
            reservation.numberOfGuests &&
            reservation.occasion
        )
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <label className={styles.label} htmlFor="date" >Date</label>
            <input className={styles.input} type="date" id="date" name="date" title="date" value={reservation.date} onChange={changeHandler} />
            <label className={styles.label} htmlFor="time">Time</label>
            <select className={styles.input} id="time" name="time" title="time" value={reservation.time} onChange={changeHandler}>
                <option value="" disabled hidden>Select time</option>
                {timeOptions}
            </select>
            <label className={styles.label} htmlFor="numberOfGuests">Number of Guests</label>
            <input className={styles.input} type="number" id="numberOfGuests" name="numberOfGuests" title="numberOfGuests" placeholder="Choose number of guests" min="1" max="10" value={reservation.numberOfGuests} onChange={changeHandler} />
            <label className={styles.label} htmlFor="occasion">Occasion</label>
            <select className={styles.input} id="occasion" name="occasion" title="occasion" value={reservation.occasion} onChange={changeHandler}>
                <option value="" disabled hidden>Select occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <Button
                type="submit"
                status={!getIsFormValid()}
                valid="Make Your reservation"
                invalid="Please fill in all fields" />
        </form>
    )
}

export default BookingForm