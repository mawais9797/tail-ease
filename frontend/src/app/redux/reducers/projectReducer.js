"use client";
const initialState = {
  animalsData: {},
};

const projectReducer = (state = initialState, action) => {
  //   debugger;
  switch (action.type) {
    case "ADD_ANIMAL_DATA":
      return { animalsData: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
