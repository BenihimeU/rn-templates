import { SELECTED_SONG } from "../type";
import { combineReducers } from 'redux';
const songsReducer = () => {
    return [{
        title: "Song 1",
        duration: "4:00"
    }, {
        title: "Song 2",
        duration: "3.55"
    }, {
        title: "Song 3",
        duration: "5.43"
    }, {
        title: "Song 4",
        duration: "2:56"
    }]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === SELECTED_SONG) {
        return action.payload
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});