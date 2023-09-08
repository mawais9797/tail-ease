"use client";
import axios from "axios";

export const animalDataAction = () => async (dispatch) => {
  // debugger;

  const { data } = await axios.get(
    "http://192.168.1.215:5000/WoundedAnimals/All"
  );
  console.log("Animals= ", data);
  const animalData = data.woundedAnimals;

  dispatch({
    type: "ADD_ANIMAL_DATA",
    payload: animalData,
  });
};

export const vetDoctors = () => async (dispatch) => {
  debugger;
  const { data } = await axios.get("http://192.168.1.215:5000/VetDoc/All");
  console.log("VetDoctors= ", data);
  const vetDoc = data.allDoctors;
  console.log("vetDoc: ", vetDoc);

  dispatch({
    type: "ALL_VETDOCTOR_DATA",
    payload: vetDoc,
  });
};

export const clinics = () => async (dispatch) => {
  debugger;
  const { data } = await axios.get("http://192.168.1.215:5000/VetClinic/all");
  console.log("All Clinics: ", data);

  dispatch({
    type: "ALL_CLINICS_DATA",
    payload: data.getClinics,
  });
};
