import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from '../actions/answers';
//helpers
import { getVotedKeys, getTextKeys, getPercentage } from "../utils/helpers";

@connect(mapStateToProps)
class Poll extends Component {
  handleAnswer = answer => {
    const {poll, authedUser} = this.props;
    this.answered = true;
    this.props.dispatch(handleAddAnswer({
      authedUser,
      answer,  //a
      pollId: poll.id
    }))
  }
  render() {
    if (this.props.poll === null) {
      return <p>This poll doesn't exist</p>;
    }
    const { poll, authorAvatar, vote, authedUser } = this.props;
    const totalVotes = getVotedKeys().reduce(
      (total, key) => total + poll[key].length,
      0
    );
    return (
      <div className="poll-container">
        <h1 className="question">{poll.question}</h1>
        <div className="poll-author">
          By <img src={authorAvatar} alt="Author Avatar" />
        </div>
        <ul>
          {getTextKeys().map(key => {
            const count = poll[key[0] + "Votes"].length;
            return (
              <li key={key} onClick={()=>{
                if(vote == null && !this.answered ){
                  this.handleAnswer(key[0]);
                }
              }}>
                {vote === null ? (
                  poll[key]
                ) : (
                  <div style={{ color: "red" }} className="result">
                    <span>{poll[key]}</span>
                    <span>
                      {getPercentage(count, totalVotes)}% ({count})
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, polls }, { match }) {
  const id = match.params.id;
  const poll = polls[id];
  if (!poll) {
    return { poll: null };
  }

  const vote = getVotedKeys().reduce((vote, key) => {
    if (poll[key].includes(authedUser)) {
      return key;
    }
    return vote === null ? null : vote[0];
  }, null);

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL
  };
}

export default Poll;
