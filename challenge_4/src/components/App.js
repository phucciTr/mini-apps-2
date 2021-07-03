import './../styles/App.css';
import Board from './Board.js';

function App({ winStatus }) {
  console.log('winStatus = ', winStatus);

  return (
    <div className="App">
      <h1>Mines Sweeper</h1>
      {winStatus && <h1>You Won The Game</h1>}

      <table>
        <Board />
      </table>
    </div>
  );
}

export default App;
