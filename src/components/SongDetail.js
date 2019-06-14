import React from "react";
import { connect } from "react-redux";

const SongDetail = () => {
  return (
    <div>
      <h1>songdetail</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
