import { combineReducers } from 'redux';
import board from './board';
import winStatus from './status';


var rootReducer = combineReducers({ board, winStatus });


export default rootReducer;