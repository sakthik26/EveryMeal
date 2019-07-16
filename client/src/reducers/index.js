
import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';
import UserReducer from "./reducer_user";

const rootReducer = combineReducers({
   user: UserReducer
});

export default rootReducer;