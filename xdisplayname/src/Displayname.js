// src/NameForm.js
import React, { useState } from 'react';

const Displayname = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName && lastName) {
            setFullName(`${firstName} ${lastName}`);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <br /><br />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
            <br /><br />
            {fullName && <div className="full-name">Full Name: {fullName}</div>}
        </div>
    );
};

export default Displayname;
