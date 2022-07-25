import petCounter from "./petCounter";
import petFavourite from "./petFavourite";
import users from "./users";
import { combineReducers } from "redux";

const reducers = combineReducers({
  petCounter,
  petFavourite,
  users,
});

export default reducers;
