import * as types from "../constants";

export const showModal = () => {
  return async (dispatch) => {
    dispatch({ type: types.SHOW_MODAL });
  };
};

export const hideModal = () => {
  return async (dispatch) => {
    dispatch({ type: types.HIDE_MODAL });
  };
};

export const changeModalTitle = async () => {
  return (dispatch) => {};
};

export const changModalContent = async () => {
  return (dispatch) => {};
};
