import * as types from "../constants";

const initialState = {
  bookList: [],
  loading: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_BOOK_REQUEST:
      return { ...state, loading: true };
    case types.GET_ALL_BOOK_SUCCESS:
      return { ...state, bookList: action.payLoad.bookList, loading: false };
    case types.GET_ALL_BOOK_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
