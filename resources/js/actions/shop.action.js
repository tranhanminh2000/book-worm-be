import * as types from "../constants";
import AxiosService from "../services/AxiosService";

export const actionGetFilterList = () => {
    return async (dispatch) => {
        dispatch({ type: types.GET_FILTER_LIST_REQUEST });

        const categoryList = await AxiosService.get("/categories");
        const authorList = await AxiosService.get("/authors");
        const ratingList = [1, 2, 3, 4, 5];
        const filterList = {
            categoryList: categoryList.data.data.categoriesName,
            authorList: authorList.data.data.authorsName,
            ratingList: ratingList,
        };

        dispatch({
            type: types.GET_FILTER_LIST_SUCCESS,
            payLoad: { filterList: filterList },
        });
    };
};

export const actionGetBookList = () => {
    return async (dispatch) => {
        dispatch({ type: types.GET_BOOK_LIST_REQUEST });

        dispatch({
            type: types.GET_BOOK_LIST_SUCCESS,
            payLoad: { filterList: filterList },
        });
    };
};
