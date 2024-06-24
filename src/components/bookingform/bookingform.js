import React, { useState } from 'react';
import './bookingform.css';

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [number, setNumber] = useState('');
    const [occasion, setOccasion] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsConfirmed(true);
        props.submitForm({ date, time, number, occasion });
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch({ type: 'update', date: e });
    }

    return (
        <header>
            <form onSubmit={handleSubmit} className="formstyle" aria-label="Booking Form">
                <label htmlFor="res-date">Choose date</label>
                <input 
                    type="date" required
                    className="inputResDate"
                    value={date}
                    onChange={(e) => handleChange(e.target.value)}
                />

                <label htmlFor="res-time">Choose time</label>
                <select 
                    className="selectBooking"
                    value={time}
                    onChange={(e) => setTime(e.target.value)} required
                >
                    <option value="">Select time</option>
                    {props.availableTimes && props.availableTimes.map((availableTime, index) => (
                        <option key={index} value={availableTime}>{availableTime}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input 
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />

                <label htmlFor="occasion">Occasion</label>
                <select 
                    className="selectBooking"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)} required
                >
                    <option value="">Select occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <button type="submit" className="res-btn" disabled={isConfirmed} aria-label={isConfirmed ? 'Reservation Confirmed' : 'Make a reservation'}>
                    {isConfirmed ? 'Confirmed' : 'Make a reservation' }
                </button>
            </form>
        </header>
    );
}

export default BookingForm;

