import React from 'react';

const NextChart = ({ next }) => {

  return (
    <div>
      <h2>Show Next Chart</h2>
      <form onSubmit={(e) => next(e)} >

        <input type="submit" value="Next"/>
      </form>
    </div>
  );
};

export default NextChart;