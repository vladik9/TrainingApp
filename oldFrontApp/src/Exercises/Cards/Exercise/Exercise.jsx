import React, { useContext } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import styles from "./Exercise.module.css";
import { WorkOutContextObject } from "../../WorkoutContext/WorkOutContextWrapper";

export default function Exercise({ exercise, exerciseIndex }) {
  const ctx = useContext(WorkOutContextObject);
  return (
    <>
      <div className={styles.elementSize}>
        {exerciseIndex + 1} {exercise.exercise}
      </div>
      <strong
        onClick={() => {
          ctx.handleModalExecute(
            exercise.link,
            exercise.repetisions,
            exercise.weightHistory,
            exercise.exercise
          );
        }}
        className={styles.exerciseRepetitions}
      >
        {exercise.repetisions}
        <div href={exercise.link} className={styles.iconStle}>
          <div>
            <BsBoxArrowUpRight />
          </div>
        </div>
      </strong>
    </>
  );
}
