var board = (state = [], action) => {
  if (action.type === 'CHANGE_BOARD') {
    return action.board;
  }

  return state;
};

var boardSize = (state = 10, action) => {
  if (action.type === 'CHANGE_BOARD_SIZE') {
    return action.size;
  }

  return state;
};


export { board, boardSize };
