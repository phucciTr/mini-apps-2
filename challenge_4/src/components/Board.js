import _ from 'lodash';
import Row from './Row';


var Board = ({ boardSize }) => {
  return (
    <tbody>
      {_.range(boardSize).map((row) =>
        <Row row={row} size={boardSize}/>
      )}
    </tbody>
  )
};


export default Board;
