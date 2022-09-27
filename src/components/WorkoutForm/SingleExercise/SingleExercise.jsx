import React from 'react';
import { FaEllipsisV, FaTrashAlt } from 'react-icons/fa';

import styles from './SingleExercise.module.scss';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
const SingleExercise = () => {
    return (
        <div className={styles.exercise}>
            <h3 className="heading-tertiary">Bench (Barbell)</h3>

            {/* SETS */}
            <div className={`${styles.exerciseSetsBox}`}>
                <div className={`${styles.exerciseSet}`}>
                    <div className={styles.exerciseSetHeader}>
                        <h4 className="heading-quaternary">Set</h4>
                        <h4 className="heading-quaternary">lbs</h4>
                        <h4 className="heading-quaternary">Reps</h4>
                    </div>
                    <div className={styles.exerciseSetContent}>
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
                    <div className={styles.exerciseSetContent}>
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
                    <div className={styles.exerciseSetContent}>
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
    );
};

export default SingleExercise;
