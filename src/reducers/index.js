import { combineReducers } from "redux";
import postReducer from "./PostReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postReducer,
  users: usersReducer
});
