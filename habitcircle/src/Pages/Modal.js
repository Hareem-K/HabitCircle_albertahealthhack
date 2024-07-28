// Modal.js
import React from 'react';
import './Styling/Modal.css';

const Modal = ({ isOpen, onClose, onParentClick, onFamilyClick }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Select User Type</h2>
                <button onClick={onParentClick}>I am a Parent/Guardian</button>
                <button onClick={onFamilyClick}>I am a Family Member</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
