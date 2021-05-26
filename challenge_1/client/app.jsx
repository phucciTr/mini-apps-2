import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import request from './lib/request.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ['init']
    }
  }

  componentDidMount() {
    console.log('data = ', this.state.data);
    request.search('/20', (contents) => this.setState({data: contents}));
  }

  componentDidUpdate() {
    console.log('data = ', this.state.data[0]);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {/* {this.state.data[0]} */}
        <Search/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));