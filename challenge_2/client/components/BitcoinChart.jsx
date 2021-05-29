import React, { useState } from 'react';
import initChart from './../lib/chart.js';

const BitcoinChart = ({ dataSet }) => {

  const backgrounds = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ];

  const borders = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ];

  const random = () => {
    let max = 255;
    let min = 1;
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const generateLableColor = () => {
    let colors = [random(), random(), random()];
    let border = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 1)`;
    let background = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.2)`;

    return [border, background];
  };

  const createDataSet = () => {
    let label = [];
    let data = [];
    let backgroundColors = [];
    let borderColors = [];
    let currentColor = 0;

    dataSet.forEach((current, i) => {
      if (i % 14 === 0 || i === dataSet.length - 1) {

        label.push(current[0]);
        data.push(current[1]);

        if (currentColor < borders.length - 1) {
          backgroundColors.push(backgrounds[currentColor]);
          borderColors.push(borders[currentColor]);
          currentColor++;
        }
        else {
          let [border, background] = generateLableColor();
          backgroundColors.push(background);
          borderColors.push(border);
        }
      }
    });

    return [label, data, backgroundColors, borderColors];
  };

  const displayChart = () => {
    let [label, data, backgroundColors, borderColors] = createDataSet();
    initChart(label, data, backgroundColors, borderColors);
  }

  displayChart();

  return (
    <canvas id="myChart" width="400" height="400"></canvas>
  );

};

export default BitcoinChart;