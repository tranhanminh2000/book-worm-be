import * as types from "../constants";
import AxiosService from "../services/AxiosService";
const { APP_BASE_URL } = process.env;

export const actionGetAllBook = () => {
  return async (dispatch) => {
    dispatch({ type: types.GET_ALL_BOOK_REQUEST });
    const res = await AxiosService.get(APP_BASE_URL + "/book");
    if (res.status === 200) {
      dispatch({
        type: types.GET_ALL_BOOK_SUCCESS,
        payLoad: { bookList: res.data },
      });
    } else {
      dispatch({ types: types.GET_ALL_BOOK_FAILED });
    }
  };
};

export const actionGetBookDetail = (id)=>{
  return async(dispatch) => {
    dispatch({ type: types.GET_BOOK_DETAIL_REQUEST });
    const res = await AxiosService.get(APP_BASE_URL + "/book/" + id);
    
    if (res.status === 200) {
      dispatch({
        type: types.GET_BOOK_DETAIL_SUCCESS,
        payLoad: { book: res.data.data },
      });
    } else {
      dispatch({ types: types.GET_BOOK_DETAIL_FAILED });
    }
  }
}