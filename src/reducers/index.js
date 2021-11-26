
// import users from "./users";
import { combineReducers } from "redux";
import randomUser from './randomUser'
import member from './member'

export default function createReducer(injectedReducers) {
  return combineReducers({
    ...injectedReducers,
  randomUser,
  member,
  })
}
