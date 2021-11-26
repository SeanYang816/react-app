
// import users from "./users";
import randomUser from './randomUser'
import { combineReducers } from "redux";

export default function createReducer(injectedReducers) {
  return combineReducers({
    ...injectedReducers,
  randomUser,

  })
}
