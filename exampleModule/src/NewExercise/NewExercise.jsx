import React, { useState } from "react";
import axios from "axios";
import apiOptions from "../APIObjects";
import styles from "./NewExercise.module.css";
import navStyles from "./BodyPart/BodyPart.module.css";
import BodyPart from "./BodyPart/BodyPart";
import NewExerciseCard from "./BodyPart/NewExerciseCard/NewExerciseCard";
export default function NewExercise() {
  const [bodyPart, setBodyPart] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);

  const handleGetExercise = () => {
    const getData = async () => {
      try {
        const response = await axios.request(apiOptions);
        setBodyPart(response.data);
      } catch (error) {
        console.error("Error " + error);
      }
    };
    getData();
  };
  const handleBodyPartSet = (exerciseList) => {
    setExerciseList(exerciseList.slice(0, 6));
  };

  return (
    <div className={styles.newExerciseContainer}>
      {exerciseList.length === 0 ? (
        <div className={navStyles.navigatorPosition}>
          {bodyPart.length !== 0 &&
            bodyPart.map((el) => (
              <BodyPart
                key={el}
                bodyPart={el}
                handleBodyPartSet={handleBodyPartSet}
              />
            ))}
        </div>
      ) : (
        exerciseList.map((el) => {
          return <NewExerciseCard exerciseObject={el} key={el.id} />;
        })
      )}

      <button className={styles.addButton} onClick={handleGetExercise}>
        +
      </button>
    </div>
  );
}
