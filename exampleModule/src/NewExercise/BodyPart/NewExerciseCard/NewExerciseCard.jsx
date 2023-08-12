import React from "react";
import styles from "./NewExerciseCard.module.css";

export default function NewExerciseCard({ exerciseObject }) {
  return (
    <div className={styles.contentWraper}>
      <div className={styles.tileStyle}>
        <h3>
          {exerciseObject.name}
          <div style={{ textAlign: "right" }}></div>
        </h3>
        <h4> {exerciseObject.target}</h4>
        <div className={styles.imageWrapper}>
          <img
            className={styles.imageGif}
            src={exerciseObject.gifUrl}
            alt="GIF"
          />
        </div>
      </div>
    </div>
  );
}
