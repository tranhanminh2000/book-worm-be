import * as types from "../constants";

const initialState = {
  book: {
    title: "",
    summary: "",
    price: "",
    photo: "",
    author: null,
    category: null,
    reviews: [],
  },
  loading: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOK_DETAIL_REQUEST:
      return { ...state, loading: true };
    case types.GET_BOOK_DETAIL_SUCCESS:
      const {
        book_title,
        book_summary,
        book_price,
        book_cover_photo,
        author,
        category,
        reviews,
      } = action.payLoad.book;
      const bookDetail = {
        title: book_title,
        summary: book_summary,
        price: book_price,
        photo: book_cover_photo !== null ? book_cover_photo : "bookDefault",
        author: author.author_name,
        category: category.category_name,
        reviews: reviews,
      };
      return { ...state, book: bookDetail, loading: false };
    case types.GET_BOOK_DETAIL_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
