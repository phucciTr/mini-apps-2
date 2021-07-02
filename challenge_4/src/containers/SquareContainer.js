import { connect } from 'react-redux';
import Square from './../components/Square.js';
import handleSquareClick from './../actions/square.js';

var mapStateToProps = (state) => ({
  board: state.board
});

var mapDispatchToProps = (dispatch) => ({
  handleClick: (row, col, board) => {
    dispatch(handleSquareClick(row, col, board));
  }
});

var SquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Square);


export default SquareContainer;