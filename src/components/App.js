import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const pageOne = () => {
  return (
    <div>
      Pageone
      <Link to="/pagetwo"> goto page two</Link>
    </div>
  );
};
const pageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/"> goto page one</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne} />
          <Route path="/pagetwo" component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
