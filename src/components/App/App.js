
import React from 'react';
// import './App.css';
import Songlist from '../SongList/SongList';


const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <Songlist />
        </div>
      </div>
    </div>
  );
}

export default App;
