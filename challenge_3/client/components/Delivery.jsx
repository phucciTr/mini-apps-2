import React from 'react';

const Delivery = ({ frame, delivery, pins }) => {

  let currentPins = !pins[frame]
    ? 'pins'
    : delivery === 0
      ? pins[frame].first
      : pins[frame].second;

  currentPins = currentPins === 0 ? 'pins' : currentPins;

  return <td>{currentPins}</td>
};

export default Delivery;