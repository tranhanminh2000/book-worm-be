import delayAsync from "../common/delay";
import * as types from "../constants";
import AxiosService from "../services/AxiosService";

export const actionGetBookReviews = (condition) => {
    return async (dispatch) => {
        dispatch({ type: types.GET_FILTER_LIST_REQUEST });
        try {
            const uri = generateUriFromCondition(condition);
            const res = await AxiosService.get(uri);
            if (res.status === 200) {
                await delayAsync(300);
                dispatch({
                    type: types.GET_FILTER_LIST_SUCCESS,
                    payLoad: { review: res.data.data },
                });
            }
        } catch (error) {
            delayAsync(300);
            dispatch({ type: types.GET_FILTER_LIST_FAILED });
        }
    };
};
