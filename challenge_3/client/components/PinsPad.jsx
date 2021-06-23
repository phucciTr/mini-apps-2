import React, { useState } from 'react';
import _ from 'lodash';


const PinsPad = ({ handleClick, maxPins}) => (
  <div>
    <table>
    <tbody>
      {_.range(4).map((row) =>
        <tr key={row}>
          {_.range(3).map((col) => {
            let padValue = (row + 1) + (row * 2) + col;
            padValue = (row >= 3 && col === 1) ? 10 : padValue;
            padValue = padValue > maxPins ? '' : padValue;

            return row < 3
              ? <td onClick={(e) => handleClick(Number(e.target.innerText))} >{padValue}</td>
              : col === 1
                ? <td onClick={(e) => handleClick(Number(e.target.innerText))} >{padValue}</td>
                : <td></td>
          })}
        </tr>
      )}
    </tbody>
    </table>
  </div>
);


export default PinsPad;