import { combineReducers } from "redux";
import socialAuthReducer from "./social_auth_reducer";

export default combineReducers({
  socialAuth: socialAuthReducer
});
