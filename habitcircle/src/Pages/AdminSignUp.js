//Admin
//Generate Code
//Share code
//Go to Family Dashboard
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styling/AdminSignUp.css';

function AdminSignUp() {
    const [adminName, setAdminName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const [generatedKey, setGeneratedKey] = useState('');
    const [showDashboardButton, setShowDashboardButton] = useState(false);
    const navigate = useNavigate();

    const generateKey = () => {
        if (adminName === '' || adminEmail === '') {
            alert('Please enter both name and email.');
            return;
        }
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
        navigate('/mainDashboard');
    };

    return (
        <div className="admin-signup-container bg-special">
            <h1 className="AdminTitle">Admin Sign Up</h1>
            <input
                type="text"
                placeholder="Admin Name"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                className="admin-input"
            />
            <input
                type="email"
                placeholder="Admin Email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="admin-input"
            />
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
