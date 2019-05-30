
import React from 'react';
// import './App.css';
// import Songlist from '../SongList/SongList';
// import SongDetails from '../SongDetails/SongDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import User from '../User/User';
// import NoteApp from '../NoteApp/NoteApp';
import NoteAppContext from '../NoteAppCustomHooks/components/NoteApp';



const App = () => {
  return (
    // <div className="ui container grid">
    //   <div className="ui row">
    //     <div className="column eight wide">
    //       <Songlist />
    //     </div>
    //     <div className="column eight wide">
    //       <SongDetails />
    //     </div>
    //   </div>
    // </div>
    <>
      <Header />
      {/* <User /> */}
      {/* <NoteApp /> */}
      <NoteAppContext />
      <Footer />
    </>
  );
}

export default App;
