import * as types from "./actionType";

const initialState = {
  datas: [],
  data: {},
  loading: true,
};

const datasReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATAS:
      return {
        ...state,
        datas: action.payload,
        loading: false,
      };
    case types.DELETE_DATA:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default datasReducers;
