import { connect } from 'react-redux';
import App from './../components/App.js';
import { initNextLevel } from './../actions/app.js';

var mapStateToProps = (state) => ({
  winStatus: state.winStatus,
  level: state.level,
  lost: state.lost
});

var mapDispatchToProps = (dispatch) => ({
  playNextLevel: () => {
    dispatch(initNextLevel());
  }
});


var AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;