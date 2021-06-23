import React from 'react';
import _ from 'lodash';
import Delivery from './Delivery.jsx';

const Frame = ({ row, col, frame, pins }) => {

  const calculatePoints = () => {
    if (pins[col] && pins[col].length > 1) {
      let delivery1 = pins[col][0];
      let delivery2 = pins[col][1];
      return delivery1 + delivery2;
    }
  };

  let framePoints = calculatePoints();
  framePoints = framePoints ? framePoints : 'total';

  return (
    <td>
      {row === 0 && _.range(2).map((innerCol) => <Delivery frame={col} delivery={innerCol} pins={pins} />)}
      {row === 1 && <td>{framePoints}</td>}
      {row === 2 && col === frame && <td>{`frame ${frame + 1}`}</td>}
    </td>
  )
};


export default Frame;