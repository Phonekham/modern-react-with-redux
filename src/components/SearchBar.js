import React from "react";

class SeachBar extends React.Component {
  state = {
    term: ""
  };

  onInputchange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    // TODO: Make sure we call
    // callback from parent component
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputchange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SeachBar;
