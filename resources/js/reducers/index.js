import { combineReducers } from "redux";
import modal from "./modal.reducer";
import book from "./book.reducer";
import detail from "./detail.reducer";

const rootReducer = combineReducers({
  modal,
  book,
  detail,
});

export default rootReducer;
