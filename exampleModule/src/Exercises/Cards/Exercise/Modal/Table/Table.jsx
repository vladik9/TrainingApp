import React, { useContext } from "react";
import styles from "./Table.module.css";
// import { WorkOutContextObject } from "../../../../../WorkoutContext/WorkOutContextWrapper";
import { WorkOutContextObject } from "../../../../WorkoutContext/WorkOutContextWrapper";

var uiqueId = require("uniqid");

const Table = ({ history }) => {
  const ctx = useContext(WorkOutContextObject);

  return (
    <div className={styles.tableOverflow}>
      <table className={styles.greyGridTable}>
        <thead>
          <tr key={uiqueId()}>
            <th key={uiqueId()}>Set</th>
            {history.map((el, set) => {
              return <th key={uiqueId()}>{set + 1}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr key={uiqueId()}>
            <td key={uiqueId()}>Weight</td>
            {history.map((el) => {
              return <td key={uiqueId()}>{el} kg</td>;
            })}
          </tr>
        </tbody>
        <tfoot>
          <tr key={uiqueId()}>
            <td key={uiqueId()}>Total:</td>
            {/* here will be summ of all kg */}
          </tr>
        </tfoot>
      </table>
      <div className={styles.exerciseButtonsForm}>
        <div
          className={styles.buttonAddExerciseButton}
          onClick={() => {
            ctx.handleAddExercise();
          }}
        >
          +
        </div>
        <div className={styles.inputExerciseButton}>
          <input
            className={styles.inputExerciseButton}
            id="exerciseWeight"
            min="1"
            type="number"
          />
        </div>
        <div className={styles.buttonRemoveExerciseButton}>-</div>
      </div>
    </div>
  );
};
export default Table;
