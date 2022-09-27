import { useState } from 'react';
import { FaEllipsisV, FaTrashAlt } from 'react-icons/fa';

import styles from './WorkoutForm.module.scss';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import SingleExercise from './SingleExercise/SingleExercise';

const WorkoutForm = ({ setShowModal }) => {
    function displayExercisesModal() {
        setShowModal(prev => !prev);
    }

    return (
        <div className={styles.workoutForm}>
            <div className={styles.workoutFormHeader}>
                <Input
                    type="text"
                    classes="input input--workout-name"
                    placeholder="Enter Workout Name"
                />
                <Button
                    classes="btn btn--icon"
                    btnText={<FaEllipsisV size={15} />}
                />
            </div>
            <div className={styles.workoutFormBody}>
                <SingleExercise />
                <SingleExercise />
                <SingleExercise />
            </div>

            {/* FOR SMALLER SCREENS */}
            <div className={styles.workoutFormFooter}>
                <Button
                    classes="btn btn--workout-form btn--add-exercise"
                    btnText="Add Exercise"
                    clickFunction={displayExercisesModal}
                />
            </div>
        </div>
    );
};

export default WorkoutForm;
