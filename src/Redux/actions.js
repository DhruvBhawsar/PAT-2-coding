import * as types from "./actionType";
import axios from "axios";

const getDatas = (datas) => ({
  type: types.GET_DATAS,
  payload: datas,
});

const dataDeleted = () => ({
  type: types.DELETE_DATA,
});

export const loadDatas = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8080/data `)
      .then((res) => {
        console.log(res);
        dispatch(getDatas(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteData = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:8080/data/:${id}`)
      .then((res) => {
        console.log(res);
        dispatch(dataDeleted());
        dispatch(loadDatas());
      })
      .catch((error) => console.log(error));
  };
};
