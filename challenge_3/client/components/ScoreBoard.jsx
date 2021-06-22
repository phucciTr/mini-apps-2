import React from 'react';
import _ from 'lodash';
import Frame from './Frame.jsx';


const ScoreBoard = ({ frame }) => {
  return (
    <div>
      <h2>Score Board</h2>

      <table>
      <tbody>
        {_.range(3).map((row) =>
          <tr>
            {_.range(10).map((col) =>
               <Frame row={row} col={col + 1} frame={frame} />)}
          </tr>
        )}
      </tbody>
      </table>

    </div>
  );
};

export default ScoreBoard;