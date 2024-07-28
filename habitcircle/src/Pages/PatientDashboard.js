// PatientDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styling/PatientDashboard.css';

function PatientDashboard() {
    const navigate = useNavigate();

    // Example data, replace with your actual data or fetch from API
    const [tasks, setTasks] = useState([
        { name: 'Walking', completed: 0.5, total: 1, points: 30, editable: true },
        { name: 'Sleep', completed: 7, total: 8, points: 15, editable: true },
        { name: 'Family Time', completed: 0.5, total: 1, points: 25, editable: true },
        { name: 'TV Time', completed: 0.5, total: 0.5, points: 7, editable: true },
    ]);

    const handleUnlockClick = () => {
        window.location.href = 'https://tlavo.github.io/Wordle/';
    };

    return (
        <div className="patient-dashboard">
            <div className="navbar">
                <a href="/">Logout</a>
            </div>
            <div className="header">
                <div className="achievements">
                    <button>Achievements</button>
                </div>
                <h1>Welcome Patient!</h1>
                <div className="unlocked-games">
                    <span className="coin-icon">🪙</span>
                    <span>50</span>
                    <button onClick={handleUnlockClick}>Unlocked Games</button>
                </div>
            </div>
            <div className="todo-list">
                <h2>To-Do List</h2>
                <button className="edit-todo">Edit To-Do List</button>
                {tasks.map((task, index) => (
                    <div key={index} className="task">
                        <div className="task-info">
                            <span className="task-name">{task.name}</span>
                            <div className="task-details">
                                <span className="task-points">🔥 {task.points}</span>
                                <span className="task-completion">⏰ {task.completed} / {task.total} hours complete</span>
                            </div>
                        </div>
                        <div className="lock-icon" onClick={handleUnlockClick}>
                            🔒
                        </div>
                    </div>
                ))}
            </div>
            <div className="message">
                <p>10 more days of Walking until Amusement Park Trip!! Keep it up</p>
            </div>
        </div>
    );
}

export default PatientDashboard;
