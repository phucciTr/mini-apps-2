import React from 'react';

const Delivery = ({ frame, delivery, pins }) => {

  let currentPins = !pins[frame]
    ? 'pins'
    : delivery === 0
      ? pins[frame].first
      : pins[frame].second;

  currentPins = currentPins === 0 ? 'pins' : currentPins;

  currentPins = pins[frame] &&
                delivery === 1 &&
                pins[frame].first === 10
                  ? 'X'
                  : currentPins;

  currentPins = pins[frame] &&
                delivery === 1 &&
                pins[frame].second > 0 &&
                pins[frame].first + pins[frame].second === 10
                  ? '/'
                  : currentPins;

  return <td>{currentPins}</td>
};

export default Delivery;