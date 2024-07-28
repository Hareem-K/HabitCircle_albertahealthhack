// Modal.js
import React from 'react';
import './Styling/Modal.css';

const Modal = ({ isOpen, onClose, onParentClick, onFamilyClick, onPatientClick }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className='close-modal' onClick={onClose}>X</button>
                <h2>Select User Type</h2>
                <div className='role-box'>
                <button className='role-click' onClick={onParentClick}>I am a Parent/Guardian</button>
                <button className='role-click' onClick={onFamilyClick}>I am a Family Member</button>
                <button className='role-click' onClick={onPatientClick}>I am The Patient</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
