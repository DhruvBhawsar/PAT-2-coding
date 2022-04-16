import * as types from "./actionType";
import axios from "axios";

const getData = (datas) => ({
  type: types.GET_DATA,
  payload: datas,
});

export const loadData = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:8080/city")
      .then((res) => {
        console.log(res);
        dispatch(getData(res.data));
      })
      .catch((error) => console.log(error));
  };
};
