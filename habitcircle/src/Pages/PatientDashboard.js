// PatientDashboard.js
import React, { useState, useEffect } from 'react';
import './Styling/PatientDashboard.css';

function PatientDashboard() {
    // Example data, replace with your actual data or fetch from API
    const [tasks, setTasks] = useState([
        { name: 'Walking', completed: 0.5, total: 1, points: 30, editable: true },
        { name: 'Sleep', completed: 7, total: 8, points: 15, editable: true },
        { name: 'Family Time', completed: 0.5, total: 1, points: 25, editable: true },
        { name: 'TV Time', completed: 0.5, total: 0.5, points: 7, editable: true },
    ]);

    return (
        <div className="patient-dashboard">
            <h1>Welcome Child!</h1>
            <div className="todo-list">
                <h2>To-Do List</h2>
                {tasks.map((task, index) => (
                    <div key={index} className="task">
                        <div className="task-info">
                            <span>{task.name}</span>
                            <span>{task.completed} / {task.total} hours complete</span>
                        </div>
                        {task.editable && <button className="edit-button">Edit</button>}
                        <div className="task-points">
                            <span>{task.points}</span>
                            <span role="img" aria-label="fire">🔥</span>
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
