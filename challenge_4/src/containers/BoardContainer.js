import { connect } from 'react-redux';
import Board from './../components/Board.js';

var mapStateToProps = (state) => ({
  board: state.board
});


var BoardContainer = connect(
  mapStateToProps,
  null,
)(Board);

export default BoardContainer;