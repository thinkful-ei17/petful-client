import { combineReducers } from "redux";
import { catReducer } from "../reducers/catReducer";
import { dogReducer } from "../reducers/dogReducer";
export * from "./dog";
export * from "./cat";

export const rootReducer = combineReducers({
  catReducer,
  dogReducer
});
