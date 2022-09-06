import React from 'react';
import { FaEllipsisV, FaTrashAlt } from 'react-icons/fa';

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
                                <h3 className="heading-tertiary">
                                    Bench (Barbell)
                                </h3>

                                {/* SETS */}
                                <div className={`${styles.exerciseSetsBox}`}>
                                    <div className={`${styles.exerciseSet}`}>
                                        <div
                                            className={styles.exerciseSetHeader}
                                        >
                                            <h4 className="heading-quaternary">
                                                Set
                                            </h4>
                                            <h4 className="heading-quaternary">
                                                lbs
                                            </h4>
                                            <h4 className="heading-quaternary">
                                                Reps
                                            </h4>
                                        </div>
                                        <div
                                            className={
                                                styles.exerciseSetContent
                                            }
                                        >
                                            <p>1</p>
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Button
                                                classes="btn btn--icon"
                                                btnText={<FaTrashAlt />}
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.exerciseSetContent
                                            }
                                        >
                                            <p>1</p>
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Button
                                                classes="btn btn--icon"
                                                btnText={<FaTrashAlt />}
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.exerciseSetContent
                                            }
                                        >
                                            <p>1</p>
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Button
                                                classes="btn btn--icon"
                                                btnText={<FaTrashAlt />}
                                            />
                                        </div>
                                        <Button
                                            classes="btn btn--workout-form btn--add-set"
                                            btnText="Add Set"
                                        />
                                    </div>
                                </div>
                                <Button
                                    classes="btn btn--workout-form btn--remove-set"
                                    btnText="Remove Exercise"
                                />
                            </div>

                            <div className={styles.exercise}>
                                <h3 className="heading-tertiary">
                                    Bench (Barbell)
                                </h3>

                                {/* SETS */}
                                <div className={`${styles.exerciseSetsBox}`}>
                                    <div className={`${styles.exerciseSet}`}>
                                        <div
                                            className={styles.exerciseSetHeader}
                                        >
                                            <h4 className="heading-quaternary">
                                                Set
                                            </h4>
                                            <h4 className="heading-quaternary">
                                                lbs
                                            </h4>
                                            <h4 className="heading-quaternary">
                                                Reps
                                            </h4>
                                        </div>
                                        <div
                                            className={
                                                styles.exerciseSetContent
                                            }
                                        >
                                            <p>1</p>
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Button
                                                classes="btn btn--icon"
                                                btnText={<FaTrashAlt />}
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.exerciseSetContent
                                            }
                                        >
                                            <p>1</p>
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Button
                                                classes="btn btn--icon"
                                                btnText={<FaTrashAlt />}
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.exerciseSetContent
                                            }
                                        >
                                            <p>1</p>
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Input
                                                type="Number"
                                                placeholder={''}
                                                classes="input input--set-info"
                                            />
                                            <Button
                                                classes="btn btn--icon"
                                                btnText={<FaTrashAlt />}
                                            />
                                        </div>
                                        <Button
                                            classes="btn btn--workout-form btn--add-set"
                                            btnText="Add Set"
                                        />
                                    </div>
                                </div>
                                <Button
                                    classes="btn btn--workout-form btn--remove-set"
                                    btnText="Remove Exercise"
                                />
                            </div>
                        </div>

                        {/* FOR SMALLER SCREENS */}
                        {/* <div className={styles.workoutFormFooter}>
                            <Button
                                classes="btn btn--workout-form btn--add-exercise"
                                btnText="Add Exercise"
                            />
                        </div> */}
                    </div>
                    <div>hello</div>
                </div>
            </div>
        </section>
    );
};

export default CreateWorkoutForm;
