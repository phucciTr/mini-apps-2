import React, { useState } from 'react';
import _ from 'lodash';


const PinsPad = ({ handleClick }) => {

  return (
    <div>
      <table>
        <tbody>
          {_.range(4).map((row) =>
            <tr key={row}>
              {_.range(3).map((col) =>
                row < 3
                  ? <td key={`${row}${col}`} onClick={(e) => handleClick(e.target.innerText)} >{(row + 1) + (row * 2) + col}</td>
                  : col === 1
                    ? <td key={`${row}${col}`} onClick={(e) => handleClick(e.target.innerText)} >10</td>
                    : <td key={`${row}${col}`}></td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PinsPad;