"use client";
import axios from "axios";

export const animalDataAction = async () => {
  //   debugger;

  const { data } = await axios.get(
    "https://d509-103-184-1-9.ngrok-free.app/WoundedAnimals/All"
  );
  console.log("Animals= ", data);
  // const animalData = response.data.woundedAnimals;

  dispatch({
    type: "ADD_ANIMAL_DATA",
    payload: animalData,
  });
};
