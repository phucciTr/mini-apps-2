import React, { useState } from 'react';
import initChart from './../lib/chart.js';

const NextChart = ({ next }) => {

  return (
    <div>
      <h2>Show Next Chart</h2>
      <form onSubmit={(e) => next(e)} >

        <input type="submit" value="next"/>
      </form>
    </div>
  );
};

export default NextChart;