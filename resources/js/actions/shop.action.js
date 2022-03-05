import * as types from "../constants";
import AxiosService from "../services/AxiosService";

const generateUriFromCondition = (condition) => {
    const size = `size=${condition.size}`;
    const sort = `sort[${condition.sort.by}]=${condition.sort.value}`;
    const filter =
        condition.filter === null
            ? ""
            : `&filter[${condition.filter.by}]=${condition.filter.value}`;
    const page = `page=${condition.page}`;

    const uri = `/books?${size}&${sort}${filter}&${page}`;

    return uri;
};

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

export const actionGetBookList = (condition) => {
    return async (dispatch) => {
        dispatch({ type: types.GET_BOOK_LIST_REQUEST });

        let uri = generateUriFromCondition(condition);
        console.log(uri);
        const res = await AxiosService.get(uri);

        if (res.status === 200) {
            dispatch({
                type: types.GET_BOOK_LIST_SUCCESS,
                payLoad: { data: res.data },
            });
        } else {
            dispatch({
                type: types.GET_BOOK_LIST_FAILED,
            });
        }
    };
};
