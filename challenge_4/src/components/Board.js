import _ from 'lodash';
import Row from './Row';


var Board = ({ board }) => {

  // console.log('board = ', board);

  return (
    <tbody>
      {_.range(10).map((row) =>
        <Row row={row} />
      )}
    </tbody>
  )
};


export default Board;
