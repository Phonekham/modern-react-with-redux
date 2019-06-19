import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  render() {
    return (
      <div>
        <h4>Stream lists</h4>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStreams }
)(StreamList);
