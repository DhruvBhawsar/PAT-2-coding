import * as types from "./actionType";

const initialState = {
  country: [],
  city: {},
  loading: true,
};

const countryReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        datas: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default countryReducers;
