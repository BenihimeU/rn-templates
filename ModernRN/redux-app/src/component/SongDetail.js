import React from 'react';
import { connect } from 'react-redux';
const SongDetail = ({ selectedSong }) => {

    if (!selectedSong) {
        return <div> Please select song</div>;
    }
    const { title, duration } = selectedSong;
    return (
        <div className="song-detail ui segment">
            <header className="ui header">{title}</header>
            <div className="ui content">{duration}</div>
        </div>
    );
}

const getState = (state, oldProps) => {
    const { selectedSong } = state;
    return { selectedSong };
}

export default connect(getState)(SongDetail);