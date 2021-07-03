var statusReducer = (state = false, action) => {
  if (action.type === 'CHANGE_WIN_STATUS') {
    return action.status;
  }

  return state;
};

export default statusReducer;
