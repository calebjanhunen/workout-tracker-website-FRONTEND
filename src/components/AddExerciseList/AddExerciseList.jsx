import React from 'react';

import styles from './AddExerciseList.module.scss';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

const AddExerciseList = () => {
    return (
        <div className={styles.addExerciseList}>
            <div className={styles.addExerciseListHeader}>
                <h3 className="heading-tertiary">Exercises</h3>
                <Input
                    type="text"
                    classes="input input--search-exercise"
                    placeholder="Search for an Exercise"
                />
                <div className={styles.bodyPartFilter}>
                    <label htmlFor="body-part">Filter Body Part</label>
                    <select id="body-part" defaultValue="all-body-parts">
                        <option value="all-body-parts">All Body Parts</option>
                        <option>Arms</option>
                        <option>Shoulders</option>
                        <option>Chest</option>
                        <option>Back</option>
                        <option>Core</option>
                        <option>Legs</option>
                    </select>
                </div>
                <Button
                    classes="btn btn--create-exercise"
                    btnText="Create Exercise"
                />
            </div>
            <div className={styles.addExerciseListBody}>Body</div>
        </div>
    );
};

export default AddExerciseList;
