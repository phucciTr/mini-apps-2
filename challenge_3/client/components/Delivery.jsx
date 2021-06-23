import React from 'react';

const Delivery = ({ frame, delivery, pins }) => {

  let currentPins = pins[frame] && pins[frame].length > 0
    ? pins[frame][delivery]
    : 'pins';

  return <td>{currentPins}</td>
};

export default Delivery;