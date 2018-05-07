import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

@connect(mapStateToProps)
class App extends Component {
  componentDidMount() {
    //this.props.dispatch();
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          {this.props.fakeData}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    fakeData: "this is a fake data"
  };
}

export default App;
