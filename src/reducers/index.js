import { combineReducers } from "redux";
import postsReducers from "./postsReducers";
import usersReducers from "./userReducers";

export default combineReducers({
  posts: postsReducers,
  users: usersReducers,
});
