import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
// import CommentDetail from "./CommentDetail";
// import ApprovalCard from "./ApprovalCard";
// import faker from "faker";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div>Ladtitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
