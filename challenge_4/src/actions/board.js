var changeBoard = (board) => ({
  'type': 'CHANGE_BOARD',
  'board': board
});

var changeBoardSize = (size) => ({
  'type': 'CHANGE_BOARD_SIZE',
  'size': size
});

export { changeBoard, changeBoardSize }