import './../styles/App.css';
import BoardContainer from './../containers/BoardContainer.js';

function App({ winStatus, level, playNextLevel, lost}) {

  let happy = 'https://images-na.ssl-images-amazon.com/images/I/41CyuoxrPvL._AC_.jpg';
  let sad = 'https://media.istockphoto.com/vectors/sad-face-icon-unhappy-face-symbol-vector-id934714316?k=6&m=934714316&s=170667a&w=0&h=5Tn4NDO6HAvElaTn3KrZ9YrncMzJ4B7Vo3c_IlWNPcc=';

  return (
    <div className="App">
      <h1>Mines Sweeper</h1>
      <h1>{`Level ${level}`}</h1>

      {!lost && <img className='face' src={happy} alt={happy} />}
      {lost && <img className='face' src={sad} alt={sad} />}
      {winStatus && <h1>You Won The Game</h1>}
      {winStatus && <h1 onClick={(e) => playNextLevel()} >Click For Next Level</h1>}

      <table>
      <BoardContainer />
      </table>
    </div>
  );
}

export default App;
