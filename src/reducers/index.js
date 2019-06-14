import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song1", duration: "4:18" },
    { title: "Song2", duration: "3:18" },
    { title: "Song3", duration: "4:45" },
    { title: "Song4", duration: "4:55" },
    { title: "Song5", duration: "4:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
