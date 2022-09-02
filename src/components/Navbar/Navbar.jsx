import React from 'react';

import './Navbar.scss';

const Navbar = () => {
    return (
        <header className="header">
            <div className="logo-box">
                <a href="#" className="logo-box__link">
                    Workout Tracker
                </a>
            </div>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <a href="#" className="nav__list-link">
                            Start Workout
                        </a>
                    </li>
                    <li className="nav__list-item">
                        <a href="#" className="nav__list-link">
                            Workout History
                        </a>
                    </li>
                    <li className="nav__list-item">
                        <a href="#" className="nav__list-link">
                            Workout Templates
                        </a>
                    </li>
                    <li className="nav__list-item">
                        <a href="#" className="nav__list-link">
                            Exercises
                        </a>
                    </li>
                    <li className="nav__list-item">
                        <a href="#" className="nav__list-link">
                            Explore
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
