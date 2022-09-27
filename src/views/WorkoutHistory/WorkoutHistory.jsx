import React from 'react';

import styles from './WorkoutHistory.module.scss';

import WorkoutCard from 'components/WorkoutCard/WorkoutCard';

const WorkoutHistory = () => {
    return (
        <section className={styles.workoutHistorySection}>
            <div className={styles.workoutCards}>
                <WorkoutCard />
            </div>
        </section>
    );
};

export default WorkoutHistory;
