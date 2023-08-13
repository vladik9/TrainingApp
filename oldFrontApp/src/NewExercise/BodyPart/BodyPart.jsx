import React, { useState } from "react";
import { apiOptionsExercise } from "../../APIObjects";
import axios from "axios";
import styles from "./BodyPart.module.css";

export default function BodyPart({ bodyPart, handleBodyPartSet }) {
  const [selectedPart, setSelectedBodyPart] = useState(0);

  const handleBodyPartClick = (event) => {
    const clickedBodyPart = event.target.id;
    setSelectedBodyPart(
      clickedBodyPart === selectedPart ? null : clickedBodyPart
    );

    const getExercises = async () => {
      try {
        const response = await axios.request(
          apiOptionsExercise.url + event.target.id,
          apiOptionsExercise
        );

        handleBodyPartSet(response.data);
      } catch (error) {
        console.error("Error " + error);
      }
    };
    getExercises();
  };
  return (
    <div
      id={bodyPart}
      style={{
        backgroundColor: bodyPart === selectedPart ? "yellow" : " ",
      }}
      className={styles.bodyPart}
      onClick={handleBodyPartClick}
    >
      {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
    </div>
  );
}
