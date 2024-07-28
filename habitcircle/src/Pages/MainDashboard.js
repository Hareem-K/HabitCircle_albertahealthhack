//Main Dashboard
//Habit Streak
//Navbar - home, family members, to-do list

import React, { useState, useEffect } from 'react';
import './Styling/MainDashboard.css';

function MainDashboard() {
    const initialDurations = {
        walking: '',
        sleep: '',
        eatingGreens: '',
        reading: '',
        familyTime: ''
    };

    // Get saved durations from localStorage
    const savedDurations = JSON.parse(localStorage.getItem('durations')) || initialDurations;

    const [durations, setDurations] = useState(savedDurations);
    const [editMode, setEditMode] = useState(
        Object.keys(savedDurations).reduce((acc, habit) => {
            acc[habit] = false;
            return acc;
        }, {})
    );

    const [newHabit, setNewHabit] = useState('');

    useEffect(() => {
        // Save durations to localStorage whenever it changes
        localStorage.setItem('durations', JSON.stringify(durations));
    }, [durations]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDurations({
            ...durations,
            [name]: value
        });
    };

    const toggleEditMode = (habit) => {
        setEditMode({
            ...editMode,
            [habit]: !editMode[habit]
        });
    };

    const addNewHabit = () => {
        if (newHabit.trim() && !durations[newHabit]) {
            setDurations({
                ...durations,
                [newHabit]: ''
            });
            setEditMode({
                ...editMode,
                [newHabit]: true
            });
            setNewHabit('');
        }
    };

    return (
        <div className="main-dashboard">
            <div className="navbar">
                <a href="/">Home</a>
            </div>
            <p className="welcome-message">Welcome FamilyMemberOne!</p>
            <div className="daily-streak">
                <h2>Daily Streak</h2>
                <p>Walking: ____</p>
                <p>Sleep: ____</p>
                <p>Eating Greens: ____</p>
                <p>Reading: ____</p>
                <p>Family Time: ____</p>
            </div>

            <div className="habits-bar">
                <h2>ChildName's Habits</h2>
                {Object.keys(durations).map(habit => (
                    <div key={habit}>
                        <p>{habit.charAt(0).toUpperCase() + habit.slice(1)}</p>
                        {editMode[habit] ? (
                            <input
                                type="text"
                                name={habit}
                                value={durations[habit]}
                                onChange={handleChange}
                            />
                        ) : (
                            <span>{durations[habit]}</span>
                        )}
                        <button onClick={() => toggleEditMode(habit)}>
                            {editMode[habit] ? 'Save' : 'Edit'}
                        </button>
                    </div>
                ))}
                <div>
                    <input
                        type="text"
                        value={newHabit}
                        onChange={(e) => setNewHabit(e.target.value)}
                        placeholder="New habit name"
                    />
                    <button onClick={addNewHabit}>Add New Habit</button>
                </div>
            </div>
        </div>
    );
}

export default MainDashboard;