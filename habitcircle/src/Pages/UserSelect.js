// UserSelect.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styling/UserSelect.css';
import Modal from './Modal';

function UserSelect() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPatient, setIsPatient] = useState(false);

    const handleReturningUserClick = () => {
        navigate('/returning-user');
    };

    const handleNewUserClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleParentClick = () => {
        navigate('/admin');
        setIsModalOpen(false);
    };

    const handleFamilyClick = () => {
        navigate('/family-signup');
        setIsModalOpen(false);
    };

    const handlePatientClick = () => {
        navigate('/patient-signup');
        setIsModalOpen(false);
        setIsPatient(true);
        console.log("User is a patient");
    };

    return (
        <div className='user-select-background'>
            <div className="navbar">
                <a href="/">Back</a>
            </div>
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
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onParentClick={handleParentClick}
                onFamilyClick={handleFamilyClick}
                onPatientClick={handlePatientClick}
            />
        </div>
    );
}

export default UserSelect;
