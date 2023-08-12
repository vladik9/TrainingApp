import React from "react";
import styles from "./ExerciseModal.module.css";
import Table from "./Table/Table";
const Modal = ({ currentExercise, setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>
              <strong> {currentExercise.exerciseName}</strong>
            </h5>
          </div>
          <div className={styles.modalContent}>
            <img
              className={styles.modalImage}
              src={currentExercise.link}
              alt="GIF"
            />
            <div>
              Sets:
              <strong> {currentExercise.nbOfSets}</strong>
            </div>
            <Table history={currentExercise.history} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
