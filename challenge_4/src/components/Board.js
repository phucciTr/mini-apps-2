import _ from 'lodash';
import Row from './Row';


var Board = ({ board }) => {

  console.log('board = ', board);

  return (
    <tbody>
      {_.range(10).map((row) =>
        <Row />
      )}
    </tbody>
  )
};


export default Board;
