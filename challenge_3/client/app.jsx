import React from 'react';
import ReactDOM from 'react-dom';
import PinsPad from './components/PinsPad.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      frame: 0,
      delivery: 0,
      pins: [],
      maxPins: 10

    }

    this.rollPins = this.rollPins.bind(this);

  }

  componentDidMount() {
    this.initScoreBoard();
  }

  initScoreBoard() {
    _.range(10).map(() => {
      let pins = this.state.pins;
      pins.push([]);
      this.setState({ pins: pins });
    });
  }

  rollPins(rolledPins) {
    let delivery = this.state.delivery;
    let frame = this.state.frame;
    let pins = this.state.pins;
    pins[frame][delivery] = rolledPins;

    this.setState({ pins: pins }, () => {
      console.log('this.state.pins = ', this.state.pins)
    });

    return delivery < 1
      ? this.setState({ delivery: delivery + 1, maxPins: 10 - pins[frame][0] }, () => console.log('this.state.maxPins = ', this.state.maxPins))
      : this.setState({ delivery: 0, frame: frame + 1, maxPins: 10 });
  }


  render() {

    return (
      <div>
        <h1>Bowling Game</h1>
        {this.state.frame < 10 && <h2>{`Frame ${this.state.frame + 1} Delivery ${this.state.delivery + 1}`}</h2>}
        {this.state.frame < 10 && <h4>Choose Number Of Pins Rolled</h4> }
        {this.state.frame < 10 && <PinsPad handleClick={this.rollPins} maxPins={this.state.maxPins} /> }
        <ScoreBoard frame={this.state.frame} pins={this.state.pins} />

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));