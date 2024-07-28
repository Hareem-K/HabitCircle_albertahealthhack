import React from 'react';
import './Styling/WelcomePage.css';

function WelcomePage() {
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
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WelcomePage;
