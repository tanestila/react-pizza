import { combineReducers } from "redux";
import filters from "./filters";
import pizzas from "./pizzas";

const rootReducer = combineReducers({
  pizzasReducer: pizzas,
  filtersReducer: filters,
});

export default rootReducer;
