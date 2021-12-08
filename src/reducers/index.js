
// import users from "./users";
import { combineReducers } from "redux";
import randomUser from './randomUser'
import member from './member'
import pin from './pin'

export default function createReducer(injectedReducers) {
  return combineReducers({
    ...injectedReducers,
  randomUser,
  member,
  pin,
  })
}
