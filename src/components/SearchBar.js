import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };
  //   Event Handler
  onInputChange(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  onFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term); //invoke callback in children
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              //   onChange={this.onInputChange}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
