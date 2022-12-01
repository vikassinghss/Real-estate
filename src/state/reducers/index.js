import mainReducer from "./mainReducer";
import { combineReducers } from "redux";




const reducers = combineReducers({
    room: mainReducer,
    // user:userred
})


export default reducers;
