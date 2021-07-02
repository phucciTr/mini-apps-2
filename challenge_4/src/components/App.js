import './../styles/App.css';

import BoardContainer from './../containers/BoardContainer.js';

function App() {
  return (
    <div className="App">
      <h1>Mines Sweeper</h1>

      <table>
        <BoardContainer />
      </table>
    </div>
  );
}

export default App;
