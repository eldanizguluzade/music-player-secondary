import React from 'react';
import './styles/index.css';
import PlayList from './components/PlayList';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
       <PlayList />
       <Player />
    </div>
  );
}

export default App;
