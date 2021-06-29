import _ from 'lodash';
import Square from './Square';

var Row = () => {
  return (
    <tr>
      {_.range(10).map((col) =>
        <Square />
      )}
    </tr>
  )
};

export default Row;