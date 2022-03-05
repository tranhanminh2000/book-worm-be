import { combineReducers } from "redux";
import modal from "./modal.reducer";
import detail from "./detail.reducer";
import review from "./review.reducer";
import shopFilter from "./shopFilter.reducer";
import shopProduct from "./shopProduct.reducer";

const rootReducer = combineReducers({
    modal,
    detail,
    review,
    shopFilter,
    shopProduct,
});

export default rootReducer;
