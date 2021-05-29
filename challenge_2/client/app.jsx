import React from 'react';
import ReactDOM from 'react-dom';

import initChart from './lib/chart.js';
import fetchBPI from './lib/bitcoin.js';

import BitcoinChart from './components/BitcoinChart.jsx';
import NextChart from './components/NextChart.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      disclaimer: '',
      charts: ['line', 'bar', 'radar', 'doughnut', 'pie', 'polarArea'],
      currentChart: 0
    }

    this.getNextChart = this.getNextChart.bind(this);
  }

  componentDidMount() {
    fetchBPI((data) => {
      this.setState({
        data: Object.entries(JSON.parse(data).bpi),
        disclaimer: JSON.parse(data).disclaimer
       });
    });
  }

  getNextChart(e) {
    e.preventDefault();
    let current = this.state.currentChart;

    return current < this.state.charts.length - 1
      ? this.setState({ currentChart: current + 1 })
      : this.setState({ currentChart: 0 });
  };


  render() {
    let charts = this.state.charts;
    let current = this.state.currentChart;

    return (
      <div>
        <h1>{`BPT Chart`}</h1>
        <NextChart next={this.getNextChart} />
        <BitcoinChart dataSet={this.state.data} chartType={charts[current]} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));