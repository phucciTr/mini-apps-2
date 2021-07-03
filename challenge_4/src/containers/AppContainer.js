import { connect } from 'react-redux';
import App from './../components/App.js';

var mapStateToProps = (state) => ({
  winStatus: state.winStatus
});


var AppContainer = connect(
  mapStateToProps,
  null,
)(App);

export default AppContainer;