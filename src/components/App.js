import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    // console.log(term); //involk callback in children
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 4400daddffec65fd202ec21d290a530d8554bcdfd48f36131e657b7d77d89b81"
      }
    });

    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
