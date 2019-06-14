import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    //   this.props === { songs: state.songs };
    console.log(this.props);

    return <div>Songlsit</div>;
  }
}

// Get state
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
