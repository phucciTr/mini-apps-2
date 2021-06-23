import React, { useState } from 'react';
import _ from 'lodash';


const PinsPad = ({ handleClick }) => (
  <div>
    <table>
    <tbody>
      {_.range(4).map((row) =>
        <tr key={row}>
          {_.range(3).map((col) =>
            row < 3
              ? <td onClick={(e) => handleClick(Number(e.target.innerText))} >{(row + 1) + (row * 2) + col}</td>
              : col === 1
                ? <td onClick={(e) => handleClick(Number(e.target.innerText))} >10</td>
                : <td></td>
          )}
        </tr>
      )}
    </tbody>
    </table>
  </div>
);


export default PinsPad;