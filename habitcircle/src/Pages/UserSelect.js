import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styling/UserSelect.css';

function UserSelect() {
    const navigate = useNavigate();

    const handleReturningUserClick = () => {
        navigate('/returning-user');
    };

    const handleNewUserClick = () => {
        navigate('/new-user');
    };

    return (
        <div className='user-select-background'>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="user-select-content">
                <div className="user-select-buttons">
                    <button onClick={handleReturningUserClick}>Returning User</button>
                    <button onClick={handleNewUserClick}>New User</button>
                </div>
            </div>
        </div>
    );
}

export default UserSelect;
