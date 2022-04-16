import { combineReducers } from "redux";
import datasReducers from "./reducer";

const rootReducer = combineReducers({
  data: datasReducers,
});

export default rootReducer;
