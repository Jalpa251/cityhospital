import { combineReducers } from "redux";
// import { counter} from '../reducers/CounterReducer'
import { Counter } from "./CounterReducer";
import { Medicines } from "./medicine.reducer";
import { Patientes } from "./patient.reducer";

export const rootReducer = combineReducers({
   Counter,
   Medicines,
   Patientes
})