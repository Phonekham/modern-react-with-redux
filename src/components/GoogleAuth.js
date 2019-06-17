import React from "react";

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "578988949846-fes8lpi02ctij46nnjcf350jbll9f2b9.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we signedin</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signedin</div>;
    } else {
      return <div>i am not signedin</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()} </div>;
  }
}

export default GoogleAuth;
