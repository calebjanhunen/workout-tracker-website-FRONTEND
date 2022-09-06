import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

import styles from './CreateWorkoutForm.module.scss';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

const CreateWorkoutForm = () => {
    return (
        <section className={styles.createWorkoutSection}>
            <div className="container">
                <div className="page-heading-box">
                    <h1 className="heading-primary margin-bottom-md">
                        Create Workout
                    </h1>
                </div>
                <div className="grid grid--2-cols">
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
                            <div className={styles.exercise}>
                                <div className={styles.exerciseHeading}>
                                    Exercise Name
                                </div>
                                <div className={styles.exerciseSets}>Sets</div>
                                <div className={styles.exerciseBtns}>
                                    <Button
                                        classes="btn btn--workout-form btn--add-set"
                                        btnText="Add Set"
                                    />
                                    <Button
                                        classes="btn btn--workout-form btn--remove-set"
                                        btnText="Remove Set"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.workoutFormFooter}>
                            <Button
                                classes="btn btn--workout-form btn--add-exercise"
                                btnText="Add Exercise"
                            />
                        </div>
                    </div>
                    <div>hello</div>
                </div>
            </div>
        </section>
    );
};

export default CreateWorkoutForm;
