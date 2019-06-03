
import React from 'react';
// import './App.css';
// import Songlist from '../SongList/SongList';
// import SongDetails from '../SongDetails/SongDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import User from '../User/User';
// import NoteApp from '../NoteApp/NoteApp';
// import NoteAppContext from '../NoteAppCustomHooks/components/NoteApp';
// import HooksSimpleApp from '../hooks-simple/components/HooksSimpleApp';
import { Box } from '@material-ui/core';



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
        <Box  p={4}>
          {/* <User /> */}
          {/* <NoteApp /> */}
          {/* <NoteAppContext /> */}
          {/* <HooksSimpleApp /> */}
        </Box>
      <Footer />
    </>
  );
}

export default App;
