"use client";
const initialState = {
  animalsData: {},
  vetDoctors: [],
  allClinics: [],
};

const projectReducer = (state = initialState, action) => {
  //   debugger;
  switch (action.type) {
    case "ADD_ANIMAL_DATA":
      return { animalsData: action.payload };
    case "ALL_VETDOCTOR_DATA":
      return { vetDoctors: action.payload };
    case "ALL_CLINICS_DATA":
      return { allClinics: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
