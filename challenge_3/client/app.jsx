import React from 'react';
import ReactDOM from 'react-dom';
import PinsPad from './components/PinsPad.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: 0,
      frame: 1,
      delivery: 1
    }

    this.rollPins = this.rollPins.bind(this);

  }

  componentDidMount() {

  }

  rollPins(pins) {

    let delivery = this.state.delivery;
    let frame = this.state.frame;

    this.setState({ pins: pins }, () => console.log('this.state.pins = ', this.state.pins));

    if (delivery < 2) { return this.setState({ delivery: delivery + 1 }) }
    this.setState({ delivery: 1, frame: frame + 1 });
  }


  render() {

    return (
      <div>
        <h1>Bowling Game</h1>
        {this.state.frame < 10 && <h2>{`Frame ${this.state.frame} Delivery ${this.state.delivery}`}</h2>}
        {this.state.frame < 10 && <h4>Choose Number Of Pins Rolled</h4> }
        {this.state.frame < 10 && <PinsPad handleClick={this.rollPins} /> }
        <ScoreBoard frame={this.state.frame} />

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));