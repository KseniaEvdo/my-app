import React from 'react';
import BookingForm from '../bookingform/bookingform';
import { useState } from 'react';

const Bookingpage = (props) => {
    console.log({props});
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
