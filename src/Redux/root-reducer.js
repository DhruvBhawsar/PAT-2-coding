import { combineReducers } from "redux";
import countryReducers from "./reducer";

const rootReducer = combineReducers({
  countries: countryReducers,
});

export default rootReducer;
