import React from 'react';

import './WorkoutCard.scss';

const WorkoutCard = () => {
    return (
        <div className="workout-card">
            <div className="workout-card__header">
                <h3 className="heading-tertiary">Push 1</h3>
            </div>
            <div className="workout-body"></div>
        </div>
    );
};

export default WorkoutCard;
