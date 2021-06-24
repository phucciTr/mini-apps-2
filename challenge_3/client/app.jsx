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
      maxPins: 10,
    }

    this.rollPins = this.rollPins.bind(this);
  }

  componentDidMount() {
    this.initScoreBoard();
  }

  initScoreBoard() {
    _.range(10).map(() => {
      let pins = this.state.pins;
      pins.push({ first: 0, second: 0, total: 0, bonus: 0 });
      this.setState({ pins: pins });
    });
  }

  rollPins(rolledPins) {
    let delivery = this.state.delivery;
    let frame = this.state.frame;
    let pins = this.state.pins;

    if (delivery === 0) { pins[frame].first = rolledPins; }
    if (delivery === 1) { pins[frame].second = rolledPins; }

    this.countTotalPins(pins);
    this.setState({ pins: pins });

    if (this.isStrike()) {
      return this.setState({ delivery: 0, frame: frame + 1, maxPins: 10 });
    }

    delivery < 1
      ? this.setState({ delivery: delivery + 1, maxPins: 10 - pins[frame].first })
      : this.setState({ delivery: 0, frame: frame + 1, maxPins: 10 });
  }

  isStrike(passedFrame) {
    let pins = this.state.pins;
    let delivery = this.state.delivery;
    let frame = this.state.frame;

    if (passedFrame === 0) {
      return pins[0].first === 10 && pins[0].second === 0;
    }

    if (passedFrame) {
      return pins[passedFrame].first === 10 && pins[passedFrame].second === 0;
    }

    if (!passedFrame) {
      return delivery === 0 && pins[frame].first === 10;
    }

  }

  isSpare(frame, pins) {
    return pins[frame].first + pins[frame].second === 10 && pins[frame].second !== 0;
  }

  countTotalPins(pins) {
    let delivery = this.state.delivery;
    let frame = this.state.frame;

    if (frame === 0) {
      pins[frame].total = delivery < 1
        ? pins[frame].first
        : pins[frame].total + pins[frame].second;
    }


    if (this.isStrike()) {
      let prevFrame = frame - 1;

      while (prevFrame >= 0 && this.isStrike(prevFrame)) {
        pins[prevFrame].bonus = pins[prevFrame].bonus + 10;

        pins[prevFrame].total = pins[prevFrame].bonus < 30
          ? pins[prevFrame].total + 10
          : pins[prevFrame].total;

        pins[prevFrame].bonus = pins[prevFrame].bonus > 30 ? 30 : pins[prevFrame].bonus;
        pins[prevFrame + 1].total = pins[prevFrame].total + pins[prevFrame].bonus;

        prevFrame--;
      }
    }

    let prevFrame = frame - 1;

    if (prevFrame >= 0 && delivery === 0 && this.isSpare(prevFrame, pins)) {
      pins[prevFrame].total += pins[frame].first;
    }

    if (frame > 0) {
      let prevScore = pins[frame - 1].total;

      pins[frame].total = delivery < 1
        ? pins[frame].first + prevScore
        : pins[frame].total + pins[frame].second;
    }

  }


  render() {

    return (
      <div>
        <h1>Bowling Game</h1>
        {this.state.frame < 10 && <h2>{`Frame ${this.state.frame + 1} Delivery ${this.state.delivery + 1}`}</h2>}
        {this.state.frame < 10 && <h4>Choose Number Of Pins Rolled</h4> }
        {this.state.frame < 10 && <PinsPad handleClick={this.rollPins} maxPins={this.state.maxPins} /> }
        <ScoreBoard frame={this.state.frame} pins={this.state.pins} isStrike />

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));