import React from 'react';
import BookingForm from '../bookingform/bookingform';

const Bookingpage = (props) => {
    return (
        <div>
            <BookingForm 
                availableTimes={props.availableTimes} 
                dispatch={props.dispatch} 
                submitForm={props.submitForm} 
            />
        </div>
    );
}

export default Bookingpage;
