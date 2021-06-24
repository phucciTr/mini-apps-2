import React from 'react';
import _ from 'lodash';
import Delivery from './Delivery.jsx';

const Frame = ({ row, col, frame, pins }) => {

  let framePoints = pins[col] && pins[col].total !== 0
    ? pins[col].total
    : 'total';

  return (
    <td>
      {row === 0 && _.range(2).map((innerCol) => <Delivery frame={col} delivery={innerCol} pins={pins} />)}
      {row === 1 && <td>{framePoints}</td>}
      {row === 2 && col === frame && <td>{`frame ${frame + 1}`}</td>}
    </td>
  )
};


export default Frame;