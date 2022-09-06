import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import {
    CreateWorkoutForm,
    Exercises,
    Explore,
    Home,
    WorkoutHistory,
    WorkoutTemplates,
} from './views';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="start-workout" element={<CreateWorkoutForm />} />
                <Route path="workout-history" element={<WorkoutHistory />} />
                <Route
                    path="workout-templates"
                    element={<WorkoutTemplates />}
                />
                <Route path="exercises" element={<Exercises />} />
                <Route path="explore" element={<Explore />} />
            </Route>
        </Routes>
    );
}

export default App;
