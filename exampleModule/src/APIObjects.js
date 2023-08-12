import token from "./token";

const apiOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": token,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const apiOptionsExercise = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/",
  headers: {
    "X-RapidAPI-Key": token,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export { apiOptionsExercise };

export default apiOptions;
// https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/details
