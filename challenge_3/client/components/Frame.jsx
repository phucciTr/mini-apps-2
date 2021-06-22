import React from 'react';
import _ from 'lodash';
import Delivery from './Delivery.jsx';

const Frame = ({ row, col, frame }) => {
  return (
    <td>
      {row === 0 && _.range(2).map((innerCol) => <Delivery />)}
      {row === 1 && <td>total</td>}
      {row === 2 && col === frame && <td>{`frame ${frame}`}</td>}
    </td>
  )
}

export default Frame;