import * as types from "../constants";

const initialState = {
    sort: {
        by: "",
        value: "",
    },
    size: 5,
    page: 1,
    bookData: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FILTER_LIST_REQUEST:
            return { ...state, loading: true };
        case types.GET_FILTER_LIST_SUCCESS:
            return { ...state, loading: false };
        case types.GET_FILTER_LIST_FAILED:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default reducer;
