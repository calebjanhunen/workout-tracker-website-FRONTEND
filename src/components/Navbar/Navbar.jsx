import Button from 'components/Button/Button';
import React from 'react';
import {
    FaBars,
    FaDumbbell,
    FaHistory,
    FaRegEdit,
    FaSearch,
} from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    return (
        <header className="header">
            <div className="logo-box">
                <NavLink to="/" className="logo-box__link">
                    <GiWeightLiftingUp size={60} />
                    <span>Workout Tracker</span>
                </NavLink>
            </div>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <NavLink to="/start-workout" className="nav__list-link">
                            <FaRegEdit />
                            <span>Start Workout</span>
                        </NavLink>
                    </li>
                    <li className="nav__list-item">
                        <NavLink
                            to="/workout-history"
                            className="nav__list-link"
                        >
                            <FaHistory />
                            <span>Workout History</span>
                        </NavLink>
                    </li>
                    <li className="nav__list-item">
                        <NavLink
                            to="/workout-templates"
                            className="nav__list-link"
                        >
                            <FaBars />
                            <span>Workout Templates</span>
                        </NavLink>
                    </li>
                    <li className="nav__list-item">
                        <NavLink to="/exercises" className="nav__list-link">
                            <FaDumbbell />
                            <span>Exercises</span>
                        </NavLink>
                    </li>
                    <li className="nav__list-item">
                        <NavLink to="/explore" className="nav__list-link">
                            <FaSearch />
                            <span>Explore</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="profile">
                <p className="profile__username">username</p>
            </div>
        </header>
    );
};

export default Navbar;
