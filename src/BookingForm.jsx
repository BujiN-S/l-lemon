import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const getIsFormValid = () => date !== "" && resTime !== "" && guests >= 1;

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({ date, resTime, guests, occasion });
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            aria-label="Booking form"
            style={{ display: 'grid', maxWidth: '350px', gap: '20px', margin: '0 auto' }}
        >
            {}
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={handleDateChange} 
                required 
                aria-required="true"
            />

            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={resTime} 
                onChange={(e) => setResTime(e.target.value)}
                required
                aria-label="Select reservation time"
            >
                <option value="">Select a time</option>
                {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                id="guests" 
                min="1" 
                max="10" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                required
                aria-label="Number of guests"
            />

            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={(e) => setOccasion(e.target.value)}
                aria-label="Select occasion"
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>

            {}
            <input 
                type="submit" 
                value="Make Your reservation" 
                className="submit-btn"
                disabled={!getIsFormValid()}
                aria-label="On Click" 
            />
        </form>
    );
}

export default BookingForm;