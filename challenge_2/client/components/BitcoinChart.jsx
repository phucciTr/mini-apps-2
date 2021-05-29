import React, { useState } from 'react';
import initChart from './../lib/chart.js';
import randomColor from 'randomcolor';

const BitcoinChart = ({ dataSet, chartType }) => {


  const createDataSet = () => {
    let label = [];
    let data = [];
    let backgroundColors = [];
    let borderColors = [];

    dataSet.forEach((current, i) => {
      if (i % 14 === 0 || i === dataSet.length - 1) {

        label.push(current[0]);
        data.push(current[1]);

        let color = randomColor({
          luminosity: 'bright',
          format: 'rgba',
          alpha: 0.3
        });

        backgroundColors.push(color);
        borderColors.push(color);
      }
    });

    return [label, data, backgroundColors, borderColors];
  };

  const displayChart = () => {
    let [label, data, backgroundColors, borderColors] = createDataSet();
    initChart(label, data, backgroundColors, borderColors, chartType);
  }

  displayChart();

  return (
    <canvas id="myChart" width="400" height="200"></canvas>
  );

};

export default BitcoinChart;