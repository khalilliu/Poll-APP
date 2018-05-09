import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

@connect(mapStateToProps)
class DashBoard extends Component {
  state = {
    showAnswered: false
  };

  showAnseredFn = () => {
    this.setState({
      showAnswered: true
    });
  };

  showUnansweredFn = () => {
    this.setState({
      showAnswered: false
    });
  };

  render() {
    const { showAnswered } = this.state;
    const { answered, unanswered } = this.props;
    const list = showAnswered === true ? answered : unanswered;
    return (
      <div>
        <div className="dashboard-toggle">
          <button
            onClick={this.showUnansweredFn}
            style={{ textDecoration: showAnswered ? null : "underline" }}
          >
            Unanswered
          </button>
          <span> | </span>
          <button
            onClick={this.showAnseredFn}
            style={{ textDecoration: showAnswered ? "underline" : null }}
          >
            Answered
          </button>
        </div>
        <ul>
          {list.map(poll => (
            <li key={poll.id}>
              <Link to={`polls/${poll.id}`}>{poll.question}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, polls }) {
  console.log(authedUser);
  const answers = users[authedUser].answers;
  const answered = answers.map(id => polls[id]);

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.tmiestamp);

  return {
    answered,
    unanswered
  };
}

export default DashBoard;
