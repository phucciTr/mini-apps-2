import { combineReducers } from 'redux';
import { board, boardSize } from './board';
import { winStatus, level, lost } from './status';

var rootReducer = combineReducers({ board, winStatus, level, boardSize, lost });


export default rootReducer;