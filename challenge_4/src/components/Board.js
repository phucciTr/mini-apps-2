import _ from 'lodash';
import Row from './Row';


var Board = () => {
  return (
    <tbody>
      {_.range(10).map((row) =>
        <Row row={row} />
      )}
    </tbody>
  )
};


export default Board;
