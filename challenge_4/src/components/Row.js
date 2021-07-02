import _ from 'lodash';
import SquareContainer from './../containers/SquareContainer.js';

var Row = ({ row }) => {
  return (
    <tr>
      {_.range(10).map((col) =>
        <SquareContainer row={row} col={col} />
      )}
    </tr>
  )
};

export default Row;