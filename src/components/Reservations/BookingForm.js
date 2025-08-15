import React, { useState } from 'react';

function BookingForm({ onSubmit }) {
    const [form, setForm] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === 'guests' ? Number(value) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Date:
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Time:
                <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Number of guests:
                <input
                    type="number"
                    name="guests"
                    min="1"
                    max="20"
                    value={form.guests}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Occasion:
                <select
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    required
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit reservation</button>
        </form>
    );
}

export default BookingForm;