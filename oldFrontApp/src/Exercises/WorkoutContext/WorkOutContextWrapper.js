import React, { createContext, useState } from "react";
import week1 from "../Modals/weeksExercises/exercise/week1";
import week2 from "../Modals/weeksExercises/exercise/week2";
import week3 from "../Modals/weeksExercises/exercise/week3";
import week4 from "../Modals/weeksExercises/exercise/week4";
import week5 from "../Modals/weeksExercises/exercise/week5";
import week6 from "../Modals/weeksExercises/exercise/week6";
import week7 from "../Modals/weeksExercises/exercise/week7";
import week8 from "../Modals/weeksExercises/exercise/week8";
// var uiqueId = require("uniqid");
export const WorkOutContextObject = createContext({
  exerciseObject: "",
  programedWeeks: "",
  selectedWeekNumber: "",
  setselectedWeekNumber: () => {},
  isOpen: "",
  setIsOpen: () => {},
  currentExercise: "",
  setCurrentExercise: () => {},
  handleModalExecute: () => {},
  setWeekDaySelected: () => {},
  handleAddExercise: () => {},
});

export default function WorkOutContextWrapper(props) {
  const programedWeeks = [
    "Week1",
    "Week2",
    "Week3",
    "Week4",
    "Week5",
    "Week6",
    "Week7",
    "Week8",
  ];
  const exerciseObject = [
    ...week1,
    ...week2,
    ...week3,
    ...week4,
    ...week5,
    ...week6,
    ...week7,
    ...week8,
  ];
  const [selectedWeekNumber, setselectedWeekNumber] = useState(
    programedWeeks[0]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({
    link: "",
    nbOfSets: "",
    category: "",
  });

  const handleModalExecute = (exerciseLink, repetitions, history, exercise) => {
    setCurrentExercise({
      link: exerciseLink,
      nbOfSets: repetitions,
      history: history,
      exerciseName: exercise,
    });

    setIsOpen(true);
  };

  const setWeekDaySelected = (weekDaySelected) => {
    setselectedWeekNumber(weekDaySelected);
  };

  const handleAddExercise = (fileName) => {
    console.log(selectedWeekNumber);

    const file =
      "../weeksExercises/exercise/" + selectedWeekNumber.toLowerCase() + ".js";

    console.log(
      "🚀 ~ file: WorkOutContextWrapper.js:80 ~ handleAddExercise ~ file:",
      file
    );

    // fetch("../weeksExercises/exercise/" + selectedWeekNumber + ".js")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };

  return (
    <WorkOutContextObject.Provider
      value={{
        exerciseObject,
        programedWeeks,
        selectedWeekNumber,
        setselectedWeekNumber,
        isOpen,
        setIsOpen,
        currentExercise,
        setCurrentExercise,
        handleModalExecute,
        setWeekDaySelected,
        handleAddExercise,
      }}
    >
      {props.children}
    </WorkOutContextObject.Provider>
  );
}
