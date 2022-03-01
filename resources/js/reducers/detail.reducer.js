import * as types from "../constants";

const initialState = {
    title: "",
    summary: "",
    price: "",
    discountPrice: "",
    photo: "",
    author: null,
    category: null,
    quantity: 1,
    loading: false,
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
                discount,
                author,
                category,
            } = action.payLoad.detail;
            const bookDetail = {
                title: book_title,
                summary: book_summary,
                price: book_price,
                discountPrice: discount?.discount_price,
                photo:
                    book_cover_photo !== null
                        ? book_cover_photo
                        : "bookDefault",
                author: author.author_name,
                category: category.category_name,
            };
            return { ...state, ...bookDetail };
        case types.GET_BOOK_DETAIL_FAILED:
            return { ...state, loading: false };

        case types.INCREASE_QUANTITY:
            return { ...state, quantity: state.quantity + 1 };

        case types.DECREASE_QUANTITY:
            return { ...state, quantity: state.quantity - 1 };
        default:
            return state;
    }
};

export default reducer;
