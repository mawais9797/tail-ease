"use client";
import axios from "axios";

export const animalDataAction = () => async (dispatch) => {
  // debugger;

  const { data } = await axios.get(
    "http://192.168.1.215:5000/WoundedAnimals/All"
  );
  console.log("Animals= ", data);
  const animalData = data.woundedAnimals;

  localStorage.setItem("allAnimalsCases", JSON.stringify(animalData));

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
  // debugger;
  const { data } = await axios.get("http://192.168.1.215:5000/VetClinic/all");
  console.log("All Clinics: ", data);

  localStorage.setItem("allClinics", JSON.stringify(data.getClinics));

  dispatch({
    type: "ALL_CLINICS_DATA",
    payload: data.getClinics,
  });
};

export const selectedClinicID = (clinicID, router) => async (dispatch) => {
  // debugger;

  const { data } = await axios.get("http://192.168.1.215:5000/VetClinic/all");
  // console.log("All Clinics: ", data.getClinics);
  const selectedClinic = data.getClinics.filter((id) => id._id === clinicID);
  // console.log("SElected Clinic: ", selectedClinic[0]);

  localStorage.setItem(
    "SELECTED_CLINIC_BY_USER",
    JSON.stringify(selectedClinic)
  );

  dispatch({
    type: "SELECTED_CLINIC_BY_USER",
    payload: selectedClinic,
  });
  router.push("/scenes/map/clinicmap");
};
