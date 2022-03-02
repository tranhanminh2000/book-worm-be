import { combineReducers } from "redux";
import modal from "./modal.reducer";
import book from "./book.reducer";
import detail from "./detail.reducer";
import review from "./review.reducer";

const rootReducer = combineReducers({
  modal,
  book,
  detail,
  review
});

export default rootReducer;
