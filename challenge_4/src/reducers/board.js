var boardReducer = (state = [], action) => {
  if (action.type === 'CHANGE_BOARD') {
    return action.board;
  }

  return state;
};

export default boardReducer;
