//Enter Family Code
//Go to Patient Dashboard
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styling/FamilySignUp.css';

function FamilySignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [familyCode, setFamilyCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/patientDashboard');
    };

    return (
        <div className="family-signup-background">
            <div className="navbar">
                <a href="/userselect">Back</a>
            </div>
            <div className="family-signup-content">
                <h2>Patient Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Enter Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Enter Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="familyCode">Enter Family Code</label>
                        <input
                            type="text"
                            id="familyCode"
                            value={familyCode}
                            onChange={(e) => setFamilyCode(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">→</button>
                </form>
            </div>
        </div>
    );
}

export default FamilySignUp;
