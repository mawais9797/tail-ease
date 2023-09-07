import { createStore, combineReducers, applyMiddleware } from "redux";

import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import projectReducer from "./redux/reducers/projectReducer";

// store main reducers sy pass hony wala data save krna
const rootReducer = combineReducers({
  animalsData: projectReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;
