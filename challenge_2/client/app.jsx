import React from 'react';
import ReactDOM from 'react-dom';
import initChart from './lib/chart.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  componentDidMount() {
    initChart();
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <canvas id="myChart" width="400" height="400"></canvas>

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));