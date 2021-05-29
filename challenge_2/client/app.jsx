import React from 'react';
import ReactDOM from 'react-dom';

import initChart from './lib/chart.js';
import fetchBPI from './lib/bitcoin.js';

import BitcoinChart from './components/BitcoinChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      disclaimer: ''
    }

  }

  componentDidMount() {
    fetchBPI((data) => {
      this.setState({
        data: Object.entries(JSON.parse(data).bpi),
        disclaimer: JSON.parse(data).disclaimer
       });
    });
  }

  render() {
    return (
      <div>
        <h1>{`BPT Chart`}</h1>
        <BitcoinChart dataSet={this.state.data} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));