import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Defqon.1 Weekend Festival 2018 | POWER HOUR', duration: '67:30'},
        { title: 'Defqon.1 2018 | Peacock in Concert', duration: '33:03' },
        { title: 'Defqon.1 2018 | Tweekacore & Darren Styles', duration: '44:59' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if( action.type === 'SONG_SELECTED' ) {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
})