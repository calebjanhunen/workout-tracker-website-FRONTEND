import { useState } from 'react';

import styles from './CreateWorkoutForm.module.scss';

import AddExerciseList from 'components/AddExerciseList/AddExerciseList';
import AddExerciseListModal from 'components/AddExerciseListModal/AddExerciseListModal';
import WorkoutForm from 'components/WorkoutForm/WorkoutForm';

const CreateWorkoutForm = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className={styles.createWorkoutSection}>
            <div className="container">
                <div className="page-heading-box">
                    <h1 className="heading-primary margin-bottom-md">
                        Create Workout
                    </h1>
                </div>
                <div className={styles.workoutForm}>
                    <WorkoutForm setShowModal={setShowModal} />
                    <AddExerciseList />
                    {showModal && (
                        <AddExerciseListModal setShowModal={setShowModal} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default CreateWorkoutForm;
