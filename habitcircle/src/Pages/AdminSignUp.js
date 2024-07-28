//Admin
//Generate Code
//Share code
//Go to Family Dashboard
import React, { useState } from 'react';
import './Styling/AdminSignUp.css';

function AdminSignUp() {
    const [generatedKey, setGeneratedKey] = useState('');
    const [showDashboardButton, setShowDashboardButton] = useState(false);

    const generateKey = () => {
        // Simple key generation logic (for demonstration purposes)
        const key = Math.random().toString(36).substring(2, 15);
        setGeneratedKey(key);
        setShowDashboardButton(true);
    };

    const handleShareCode = () => {
        // Logic to share the generated key (for example, copy to clipboard)
        navigator.clipboard.writeText(generatedKey).then(() => {
            alert('Code copied to clipboard');
        });
    };

    const goToDashboard = () => {
        // Logic to navigate to the Family Dashboard
        alert('Navigating to Family Dashboard');
        // Implement actual navigation logic here
    };

    return (
        <div className="admin-signup-container bg-special">
            <h1 className="AdminTitle">Admin Sign Up</h1>
            <button onClick={generateKey}>Generate Code</button>
            {generatedKey && (
                <div>
                    <p className="GeneratedKey">Generated Key: {generatedKey}</p>
                    <button className="copy-code-button" onClick={handleShareCode}>
                        Copy Code <i className="fa fa-copy"></i>
                    </button>
                </div>
            )}
            {showDashboardButton && (
                <button className="go-to-dashboard" onClick={goToDashboard}>
                    Go to Family Dashboard
                </button>
            )}
            <div className="circle-cluster top-right-cluster">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="circle-cluster bottom-left-cluster">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default AdminSignUp;
