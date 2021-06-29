/* eslint-disable no-unused-vars */
// import './../styles/App.css';
import _ from 'lodash';
// import Board from './Board';

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
