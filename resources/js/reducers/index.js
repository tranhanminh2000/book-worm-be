import { combineReducers } from "redux";
import modal from "./modal.reducer";
import detail from "./detail.reducer";
import review from "./review.reducer";
import shopFilter from "./shopFilter.reducer";

const rootReducer = combineReducers({
    modal,
    detail,
    review,
    shopFilter,
});

export default rootReducer;
