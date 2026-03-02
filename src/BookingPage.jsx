import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

export const initializeTimes = () => {
    const today = new Date();
    return window.fetchAPI ? window.fetchAPI(today) : ["17:00", "18:00", "19:00"];
};

export const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const selectedDate = new Date(action.payload);
            return window.fetchAPI ? window.fetchAPI(selectedDate) : state;
        default:
            return state;
    }
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (window.submitAPI) {
            const success = window.submitAPI(formData);
            if (success) {
                navigate("/confirmed"); 
            } else {
                alert("Failed to submit reservation. Please try again.");
            }
        } else {
            console.log("Simulated submission:", formData);
            navigate("/confirmed");
        }
    };

    return (
        <main className="booking-page">
            <section>
                <h1>Reserve a Table</h1>
                <p>Please select a date and time to book your table at Little Lemon.</p>
                <BookingForm 
                    availableTimes={availableTimes} 
                    dispatch={dispatch} 
                    submitForm={submitForm}
                />
            </section>
        </main>
    );
}

export default BookingPage;