import React, { Component } from "react";
import { connect } from "react-redux";

@connect(mapStateToProps)
class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return (
      <ul>
        {users.map(user => (
          <li className="user" key={user.id}>
            <img src={user.avatarURL} alt={`Avatar for ${user.id}`} />
            <div>
              <h1>{user.name}</h1>
              <p>{user.polls} polls</p>
              <p>{user.answers} answers</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map(id => {
        const { name, avatarURL, polls, answers } = users[id];

        return {
          id,
          name,
          avatarURL,
          polls: polls.length,
          answers: answers.length
        };
      })
      .sort((a, b) => b.polls + b.answers > a.polls + a.answers)
  };
}

export default LeaderBoard;
