import mine from './../lib/mine.js';

var changeWinStatus = (status) => ({
  'type': 'CHANGE_WIN_STATUS',
  'status': status
});

var changeLevel = (level) => ({
  'type': 'CHANGE_LEVEL',
  'level': level
});

var changeLostStatus = (lost) => ({
  'type': 'CHANGE_LOST_STATUS',
  'lost': lost
});


var initNextLevel = () => {
  return (dispatch) => {
    mine.init(mine.level += 1);
  }
};

export { changeWinStatus, changeLevel, initNextLevel, changeLostStatus };
