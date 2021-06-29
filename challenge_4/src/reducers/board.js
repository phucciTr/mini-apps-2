/* eslint-disable no-unused-vars */
import Redux from 'redux';

var boardReducer = (state = [], action) => {
  if (action.type === 'CHANGE_BOARD') {
    let newState = { board: action.board };
    return newState.board;
  }

  return state;
};

export default boardReducer;
