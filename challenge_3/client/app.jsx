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
      isOnStrike: false,
      strikeCounts: 0,
      bonus: 2,
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
    let strikeCounts = this.state.strikeCounts;

    if (delivery === 0) { pins[frame].first = rolledPins; }
    if (delivery === 1) { pins[frame].second = rolledPins; }
    if (delivery === 2) { pins[frame].bonus = rolledPins; }

    this.setState({ pins: pins });
    this.countTotalPins(pins);

    if (this.isSpare(frame, pins) && frame === 9) {
      if (delivery < 2) {
        return this.setState({ delivery: delivery + 1 });
      }
    }

    if (this.isStrike()) {
      let isOnStrike = this.state.isOnStrike;
      if (strikeCounts > 1) { isOnStrike = true; }

      if (frame < 9) {
        return this.setState({
          delivery: 0,
          frame: frame + 1,
          maxPins: 10,
          isOnStrike: isOnStrike,
          strikeCounts: strikeCounts + 1
        });
      }

      if (frame === 9) {
        if (delivery < 2) { delivery += 1; }

        return this.setState({
          delivery: delivery,
          maxPins: 10,
          isOnStrike: isOnStrike,
          strikeCounts
        });
      }

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
      if (frame === 9) { return pins[frame].first >= 10; }
      return delivery === 0 && pins[frame].first === 10;
    }

  }

  isSpare(frame, pins) {

    if (frame === 0 || !frame) {
      return pins[0].first + pins[0].second === 10 && pins[0].second > 0;
    }

    return pins[frame].first + pins[frame].second === 10 && pins[frame].second !== 0;
  }

  countStrike(onStrike, frame, prevFrame) {
    let pins = this.state.pins;
    let delivery = this.state.delivery;
    let strikeCounts = this.state.strikeCounts;

    if (onStrike) {
      if (frame === 9) {
        let currentTotal = pins[frame].first + pins[frame].second;
        pins[prevFrame].total += 10 + currentTotal;

        if (pins[prevFrame].total - pins[prevFrame - 1].total > 30) {
          pins[prevFrame].total -= 10;
        }

        return pins[frame].total += pins[prevFrame].total + currentTotal;
      }

      let currentTotal = pins[frame].first + pins[frame].second;
      pins[prevFrame].total += 10 + currentTotal;
      return pins[frame].total += pins[prevFrame].total + currentTotal;
    }

    frame = this.state.frame;
    prevFrame = frame - 1;

    if (delivery === 0) {
      pins[prevFrame].total += pins[frame].first;
      pins[frame].total += pins[frame].first + pins[prevFrame].total;
    }

    if (delivery === 1) {
      pins[frame].total -= pins[prevFrame].total;
      pins[prevFrame].total += pins[frame].second;
      pins[frame].total += pins[prevFrame].total + pins[frame].second;
    }

  }

  countDouble() {
    let pins = this.state.pins;
    let frame = this.state.frame;
    let prevFrame = frame - 1;
    let strikeCounts = this.state.strikeCounts;


    while (strikeCounts > 0) {

      if (strikeCounts === 2) {
        pins[frame - 2].total += pins[frame].first;
        pins[frame - 1].total += pins[frame - 2].total;
      }

      if (strikeCounts === 1) {
        return this.countStrike(true, frame, frame - 1);
      }

      strikeCounts--;
    }
  }

  countTriple() {
    let pins = this.state.pins;
    let delivery = this.state.delivery;
    let frame = this.state.frame;
    let prevFrame = frame - 1;
    let strikeCounts = this.state.strikeCounts;

    if (strikeCounts >= 3) {
      pins[frame - 3].total += 20;
      pins[frame - 2].total += pins[frame - 3].total + 20;
      this.setState({ strikeCounts: strikeCounts - 1 });

    }

    this.countDouble();
  }


  countOnStrikes() {
    let pins = this.state.pins;
    let delivery = this.state.delivery;
    let frame = this.state.frame;
    let prevFrame = frame - 1;
    let strikeCounts = this.state.strikeCounts;

    while (strikeCounts > 3) {
      pins[frame - strikeCounts].total +=  20;
      pins[frame - strikeCounts + 1].total += pins[frame - strikeCounts].total + 10;
      strikeCounts--;
      this.setState({strikeCounts: strikeCounts});
    }

    this.countTriple();
  }


  countRegular() {
    let pins = this.state.pins;
    let delivery = this.state.delivery;
    let frame = this.state.frame;
    let prevScore = pins[frame - 1].total;

    pins[frame].total = delivery < 1
      ? pins[frame].first + prevScore
      : pins[frame].total + pins[frame].second;
  }

  countSpare() {
    let pins = this.state.pins;
    let delivery = this.state.delivery;
    let frame = this.state.frame;
    let prevFrame = frame - 1;

    if (delivery === 0) {
      pins[prevFrame].total += pins[frame].first;
      pins[frame].total += pins[frame].first + pins[prevFrame].total;
    }

    if (delivery === 1) {
      pins[frame].total += pins[frame].second;
    }

  }

  countTotalPins(pins) {
    let delivery = this.state.delivery;
    let frame = this.state.frame;
    let strikeCounts = this.state.strikeCounts;
    let isOnStrike = this.state.isOnStrike;
    let prevFrame = frame - 1;
    let bonus = this.state.bonus;


    if (frame === 0) {
      pins[frame].total = delivery < 1
        ? pins[frame].first
        : pins[frame].total + pins[frame].second;
    }

    // handle non strike
    if (frame > 0 && strikeCounts === 0 && !this.isSpare(prevFrame, pins)) {
      this.countRegular();
    }

    // handle double
    if (strikeCounts === 2 && !this.isStrike() && delivery === 1) {
      this.countDouble();
      this.setState({ strikeCounts: 0, isOnStrike: false })
    }

    // handle triple
    if (strikeCounts === 3 && !this.isStrike() && delivery === 1) {
      this.countTriple();
      this.setState({ strikeCounts: 0, isOnStrike: false })
    }

    // handle onstrikes
    if (strikeCounts > 3 && !this.isStrike() && delivery === 1) {
      this.countOnStrikes();
      this.setState({ strikeCounts: 0, isOnStrike: false });
    }


    // handle last frame
    if (frame === 9) {

      if (strikeCounts >= 1) {
        if (bonus > 0) {
          return this.setState({ bonus: bonus - 1, delivery: delivery });
        }

        this.countOnStrikes();
        pins[frame].total += pins[frame].bonus;
        return this.setState({ strikeCounts: 0, isOnStrike: false, frame: 11 });
      }


      if (delivery === 2) {
        pins[frame].total += pins[frame].bonus;
        return this.setState({ strikeCounts: 0, isOnStrike: false, frame: 11 });
      }
    }


    // handle strike
    if (strikeCounts === 1 && !this.isStrike()) {
      this.countStrike();

      if (delivery === 1) {
        this.setState({ strikeCounts: 0 });
      }
    }

    // handle spare
    if (prevFrame >= 0 && this.isSpare(prevFrame, pins)) {
      this.countSpare();
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