// Action creator
export const selectSong = song => {
  // return an action
  return {
    type: "SONG_SELETED",
    payload: song
  };
};
