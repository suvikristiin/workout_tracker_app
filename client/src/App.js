import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllExercises from "./components/AllExercises.js";
import AllWorkouts from "./components/AllWorkouts.js";
import WorkoutItem from "./components/WorkoutItem.js";
import ExerciseItem from "./components/ExerciseItem.js"
//import Login from "./components/Login.js"
//import Register from "./components/Register.js"
import NavigationBar from "./components/NavigationBar.js";
import NewWorkout from "./components/NewWorkout.js";
import NewTrainingPlan from "./components/NewTrainingPlan.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<AllWorkouts />} />
          <Route path="/workouts/:id" element={<WorkoutItem />} />
          <Route exact path="/exercises" element={<AllExercises />} />
          <Route path="/exercises/:id" element={<ExerciseItem />} />
          <Route path="/add-workout" element={<NewWorkout />} />
          <Route path="/training-plan" element={<NewTrainingPlan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
