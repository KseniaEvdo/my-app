import React, { useReducer, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Bookingpage from '../bookingpage/bookingpage';
import Confirmedreservation from '../confirmedreservation/confirmedreservation';
import Header from '../header/header';

const Main = () => {

    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}

    function updateTimes(state, action) {
      return {availableTimes: fetchAPI(new Date(action.date))}
    }

    const [state, dispatch] = useReducer(updateTimes, initialState);

    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/reservations" element={<Bookingpage availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed" element={<Confirmedreservation/> } />
            </Routes>
        </main>


    )
}

export default Main;