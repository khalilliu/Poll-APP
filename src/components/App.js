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

@connect(mapStateToProps)
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    // const { users, polls } = this.props;
    //console.log(users);
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route path="/add" component={AddPoll} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/polls/:id" component={Poll} />
                <Route component={() => <div>Undefined path</div>} />
              </Switch>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users, polls }) {
  return {
    loading: authedUser === null,
    users,
    polls
  };
}

export default App;
