import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styling/WelcomePage.css';

function WelcomePage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/userselect');
    };

    return (
        <>
            <div className='sunrise-background'>
                <div className="sun"></div>
                <div className="welcome-content">
                    <div className='top-welcome'>
                        <p>welcome to</p>
                        <h1>HabitCircle</h1>
                    </div>
                    <div className='bottom-welcome'>
                        <button onClick={handleButtonClick}>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WelcomePage;
