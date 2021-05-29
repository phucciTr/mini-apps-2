import $ from 'jquery';
import Chart from 'chart.js';

const initChart = (label, data, backgroundColors, borderColors) => {
  let ctx = $('#myChart');

  let myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: label,
        datasets: [{
            label: 'BPI',
            data: data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
};


export default initChart;