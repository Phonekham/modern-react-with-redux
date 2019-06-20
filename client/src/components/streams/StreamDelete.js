import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <h1>StreamDelete</h1>
        <Modal
          title="Delete Stream"
          content="Are you sure want to delete the stream?"
          actions={this.renderActions()}
          onDissmiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStream }
)(StreamDelete);
