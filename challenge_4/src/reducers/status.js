var winStatus = (state = false, action) => {
  if (action.type === 'CHANGE_WIN_STATUS') {
    return action.status;
  }

  return state;
};

var level = (state = 1, action) => {
  if (action.type === 'CHANGE_LEVEL') {
    return action.level;
  }

  return state;
}

var lost = (state = false, action) => {
  if (action.type === 'CHANGE_LOST_STATUS') {
    return action.lost;
  }

  return state;
}


export { winStatus, level, lost };

