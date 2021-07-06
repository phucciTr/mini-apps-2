import _ from 'lodash';
import SquareContainer from './../containers/SquareContainer.js';

var Row = ({ row, size }) => {
  return (
    <tr>
      {_.range(size).map((col) =>
        <SquareContainer row={row} col={col} />
      )}
    </tr>
  )
};

export default Row;