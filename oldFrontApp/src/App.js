import React from "react";
import WorkOutContextWrapper from "./Exercises/WorkoutContext/WorkOutContextWrapper";
import AppWrapper from "./Exercises/AppWrapper/AppWrapper";
import NewExercise from "./NewExercise/NewExercise";
import "./App.module.css";
import Nutrition from "./Nutrition/Nutrition";
import SignInSide from "./SignInSide";
function App() {
  return (
    <WorkOutContextWrapper>
      {/* <Nutrition /> */}
      <AppWrapper />
      <NewExercise />
    </WorkOutContextWrapper>
    // <SignInSide />
  );
}

export default App;
