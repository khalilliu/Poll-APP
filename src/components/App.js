import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Route,
  DefaultRoute,
  Switch
} from "react-router-dom";
import AddPoll from "./AddPoll";
import LeaderBoard from "./Leaderboard";
import DashBoard from "./DashBoard";
import Poll from "./Poll";
//loading
import LoadingBar from "react-redux-loading";
//action
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    const { dispatch, loading } = this.props;
    if (loading === true) {
      dispatch(handleInitialData());
    }
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={DashBoard} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/polls/:id" component={Poll} />
                <Route path="/add" component={AddPoll} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
