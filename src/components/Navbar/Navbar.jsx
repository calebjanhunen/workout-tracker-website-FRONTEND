import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    return (
        <header className="header">
            <div className="logo-box">
                <Link to="/" className="logo-box__link">
                    Workout Tracker
                </Link>
            </div>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <Link to="/start-workout" className="nav__list-link">
                            Start Workout
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/workout-history" className="nav__list-link">
                            Workout History
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link
                            to="/workout-templates"
                            className="nav__list-link"
                        >
                            Workout Templates
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/exercises" className="nav__list-link">
                            Exercises
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/explore" className="nav__list-link">
                            Explore
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
