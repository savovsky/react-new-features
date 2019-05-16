import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    console.log('SongDetail - song', song);
    if (!song) {
        return (
            <h3>Select a song!</h3>
        );
    }

    return (
        <div>
            <h3>Song Detail</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('SongDetail - state', state);
    return { song: state.selectedSong };
};


export default connect(mapStateToProps)(SongDetail);
