import React, { useContext } from "react";
import styles from "./Navigator.module.css";
import { WorkOutContextObject } from "../WorkoutContext/WorkOutContextWrapper";

export default function Navigator({ weekNumber }) {
  const ctx = useContext(WorkOutContextObject);
  return (
    <div
      id={weekNumber}
      style={{
        backgroundColor: weekNumber === ctx.selectedWeekNumber ? "yellow" : "",
      }}
      className={styles.navigatorElement}
      onClick={(event) => {
        ctx.setWeekDaySelected(event.target.id);
      }}
    >
      Week {weekNumber.charAt(weekNumber.length - 1)}
    </div>
  );
}
