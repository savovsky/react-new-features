
import React from 'react';
// import './App.css';
import Songlist from '../SongList/SongList';
import SongDetails from '../SongDetails/SongDetails';


const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <Songlist />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
