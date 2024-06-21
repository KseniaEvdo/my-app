import React from 'react';
import './bookingform.css';

const BookingForm = () => {
    return (
        <form className="formstyle">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" className="inputResDate"/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" className="selectBooking">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" className="selectBooking">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit" className="res-btn">Make a reservation</button>
        </form>
    );
}

export default BookingForm;
