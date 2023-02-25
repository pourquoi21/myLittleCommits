import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import onandoffs from "./onandoffs";

const rootReducer = combineReducers({
  counter,
  todos,
  onandoffs,
});

export default rootReducer;
